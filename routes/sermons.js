const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Initialize Supabase client with fallback values
const supabaseUrl = process.env.SUPABASE_URL || 'https://yiloouwgjldnpbnnchnq.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// GET /api/sermons - Get all sermons
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, speaker, category } = req.query;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('sermons')
      .select('*')
      .order('sermon_date', { ascending: false });

    // Apply filters
    if (speaker) {
      query = query.eq('speaker', speaker);
    }
    if (category) {
      query = query.eq('category', category);
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
        page: parseInt(page),
        limit: parseInt(limit),
        total: count,
        pages: Math.ceil(count / limit)
      }
    });

  } catch (error) {
    console.error('Get sermons error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch sermons'
    });
  }
});

// GET /api/sermons/:id - Get single sermon
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('sermons')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Sermon not found'
      });
    }

    // Increment view count
    await supabase
      .from('sermons')
      .update({ view_count: (data.view_count || 0) + 1 })
      .eq('id', id);

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get sermon error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch sermon'
    });
  }
});

// GET /api/sermons/speakers/list - Get list of speakers
router.get('/speakers/list', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('sermons')
      .select('speaker')
      .order('speaker');

    if (error) {
      throw error;
    }

    // Get unique speakers
    const speakers = [...new Set(data.map(item => item.speaker))].filter(Boolean);

    res.json({
      success: true,
      data: speakers
    });

  } catch (error) {
    console.error('Get speakers error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch speakers'
    });
  }
});

// POST /api/sermons - Create new sermon (admin only)
router.post('/', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { 
      title, 
      speaker, 
      sermon_date, 
      description, 
      audio_url, 
      video_url, 
      thumbnail_url, 
      category,
      scripture_reference,
      duration
    } = req.body;

    // Validation
    if (!title || !speaker || !sermon_date) {
      return res.status(400).json({
        success: false,
        message: 'Title, speaker, and date are required'
      });
    }

    const { data, error } = await supabase
      .from('sermons')
      .insert([
        {
          title,
          speaker,
          sermon_date,
          description,
          audio_url,
          video_url,
          thumbnail_url,
          category: category || 'general',
          scripture_reference,
          duration,
          view_count: 0,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    res.status(201).json({
      success: true,
      message: 'Sermon created successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Create sermon error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create sermon'
    });
  }
});

// PUT /api/sermons/:id - Update sermon (admin only)
router.put('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('sermons')
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
        message: 'Sermon not found'
      });
    }

    res.json({
      success: true,
      message: 'Sermon updated successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Update sermon error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update sermon'
    });
  }
});

// DELETE /api/sermons/:id - Delete sermon (admin only)
router.delete('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;

    const { error } = await supabase
      .from('sermons')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      message: 'Sermon deleted successfully'
    });

  } catch (error) {
    console.error('Delete sermon error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete sermon'
    });
  }
});

module.exports = router;
