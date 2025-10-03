const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

// Initialize Supabase client with fallback values
const supabaseUrl = process.env.SUPABASE_URL || 'https://yiloouwgjldnpbnnchnq.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// GET /api/events - Get all events
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get events error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch events'
    });
  }
});

// GET /api/events/:id - Get single event
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      data
    });

  } catch (error) {
    console.error('Get event error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch event'
    });
  }
});

// POST /api/events - Create new event (admin only)
router.post('/', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { title, description, event_date, location, time, image_url, category } = req.body;

    // Validation
    if (!title || !description || !event_date || !location) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, date, and location are required'
      });
    }

    const { data, error } = await supabase
      .from('events')
      .insert([
        {
          title,
          description,
          event_date,
          location,
          time,
          image_url,
          category: category || 'general',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create event'
    });
  }
});

// PUT /api/events/:id - Update event (admin only)
router.put('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from('events')
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
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      message: 'Event updated successfully',
      data: data[0]
    });

  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update event'
    });
  }
});

// DELETE /api/events/:id - Delete event (admin only)
router.delete('/:id', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    const { id } = req.params;

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      message: 'Event deleted successfully'
    });

  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete event'
    });
  }
});

module.exports = router;
