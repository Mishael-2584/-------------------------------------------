const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Initialize Supabase client with fallback values
const supabaseUrl = process.env.SUPABASE_URL || 'https://yiloouwgjldnpbnnchnq.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// GET /api/leadership - Get all leadership
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('leadership')
      .select('*')
      .order('position_order', { ascending: true });

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get leadership error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leadership'
    });
  }
});

// GET /api/leadership/:id - Get single leader
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('leadership')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Leader not found'
      });
    }

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get leader error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leader'
    });
  }
});

module.exports = router;
