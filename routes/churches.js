const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Initialize Supabase client with fallback values
const supabaseUrl = process.env.SUPABASE_URL || 'https://yiloouwgjldnpbnnchnq.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// GET /api/churches - Get all churches
router.get('/', async (req, res) => {
  try {
    const { county, district, limit = 50, offset = 0 } = req.query;

    let query = supabase
      .from('churches')
      .select('*')
      .order('name', { ascending: true });

    // Apply filters
    if (county) {
      query = query.eq('county', county);
    }
    if (district) {
      query = query.eq('district', district);
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data,
      pagination: {
        offset: parseInt(offset),
        limit: parseInt(limit),
        total: count
      }
    });

  } catch (error) {
    console.error('Get churches error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch churches'
    });
  }
});

// GET /api/churches/:id - Get single church
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('churches')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Church not found'
      });
    }

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get church error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch church'
    });
  }
});

// GET /api/churches/counties/list - Get list of counties
router.get('/counties/list', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('churches')
      .select('county')
      .order('county');

    if (error) {
      throw error;
    }

    // Get unique counties
    const counties = [...new Set(data.map(item => item.county))].filter(Boolean);

    res.json({
      success: true,
      data: counties
    });

  } catch (error) {
    console.error('Get counties error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch counties'
    });
  }
});

// GET /api/churches/stats - Get church statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const { data: churches, error } = await supabase
      .from('churches')
      .select('county, district, membership');

    if (error) {
      throw error;
    }

    // Calculate statistics
    const totalChurches = churches.length;
    const totalMembership = churches.reduce((sum, church) => sum + (church.membership || 0), 0);
    
    // Count by county
    const countyStats = churches.reduce((acc, church) => {
      const county = church.county || 'Unknown';
      acc[county] = (acc[county] || 0) + 1;
      return acc;
    }, {});

    // Count by district
    const districtStats = churches.reduce((acc, church) => {
      const district = church.district || 'Unknown';
      acc[district] = (acc[district] || 0) + 1;
      return acc;
    }, {});

    res.json({
      success: true,
      data: {
        total_churches: totalChurches,
        total_membership: totalMembership,
        counties: countyStats,
        districts: districtStats
      }
    });

  } catch (error) {
    console.error('Get church stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch church statistics'
    });
  }
});

// POST /api/churches - Create new church (admin only)
router.post('/', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { 
      name, 
      county, 
      district, 
      location, 
      pastor, 
      membership, 
      service_times, 
      contact_info,
      coordinates,
      established_date
    } = req.body;

    // Validation
    if (!name || !county || !district) {
      return res.status(400).json({
        success: false,
        message: 'Name, county, and district are required'
      });
    }

    const { data, error } = await supabase
      .from('churches')
      .insert([
        {
          name,
          county,
          district,
          location,
          pastor,
          membership: membership || 0,
          service_times,
          contact_info,
          coordinates,
          established_date,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    res.status(201).json({
      success: true,
      message: 'Church created successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Create church error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create church'
    });
  }
});

// PUT /api/churches/:id - Update church (admin only)
router.put('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('churches')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Church not found'
      });
    }

    res.json({
      success: true,
      message: 'Church updated successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Update church error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update church'
    });
  }
});

module.exports = router;
