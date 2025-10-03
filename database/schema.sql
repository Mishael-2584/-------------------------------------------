-- North Rift Valley Field Database Schema
-- Seventh-day Adventist Church

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Admin Users Table
CREATE TABLE admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leadership Table
CREATE TABLE leadership (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    email VARCHAR(255),
    phone VARCHAR(50),
    bio TEXT,
    position_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Departments Table
CREATE TABLE departments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    leader_name VARCHAR(255),
    leader_email VARCHAR(255),
    leader_phone VARCHAR(50),
    icon VARCHAR(100),
    color VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Churches Table
CREATE TABLE churches (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    county VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    location TEXT,
    pastor VARCHAR(255),
    membership INTEGER DEFAULT 0,
    service_times JSONB,
    contact_info JSONB,
    coordinates JSONB,
    established_date DATE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Events Table
CREATE TABLE events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    time VARCHAR(50),
    location VARCHAR(255),
    category VARCHAR(100) DEFAULT 'general',
    image_url VARCHAR(500),
    registration_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sermons Table
CREATE TABLE sermons (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    speaker VARCHAR(255) NOT NULL,
    sermon_date DATE NOT NULL,
    description TEXT,
    scripture_reference VARCHAR(255),
    audio_url VARCHAR(500),
    video_url VARCHAR(500),
    thumbnail_url VARCHAR(500),
    duration INTEGER, -- in seconds
    category VARCHAR(100) DEFAULT 'general',
    view_count INTEGER DEFAULT 0,
    download_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Messages Table
CREATE TABLE contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    is_read BOOLEAN DEFAULT false,
    replied_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media Gallery Table
CREATE TABLE media_gallery (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    category VARCHAR(100) DEFAULT 'general',
    tags TEXT[],
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News/Articles Table
CREATE TABLE articles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image VARCHAR(500),
    author VARCHAR(255),
    category VARCHAR(100) DEFAULT 'news',
    tags TEXT[],
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Field Statistics Table
CREATE TABLE field_statistics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    total_churches INTEGER DEFAULT 0,
    total_membership INTEGER DEFAULT 0,
    total_population_served INTEGER DEFAULT 0,
    counties_served INTEGER DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default leadership data
INSERT INTO leadership (name, position, description, position_order) VALUES
('Jackson N. Soet', 'President', 'Leading the field with vision and dedication to serve our communities.', 1),
('Joseph Ocharo', 'Secretary', 'Ensuring effective administration and communication across the field.', 2),
('Amos Songa', 'Treasurer', 'Managing resources with integrity and transparency for God''s work.', 3);

-- Insert default departments
INSERT INTO departments (name, description, leader_name, icon, color) VALUES
('Evangelism & Ministerial Association', 'Leading souls to Christ through evangelistic campaigns and ministerial training.', 'Patrick Ngachi & James Loyatem', 'cross', '#2E7D32'),
('Health Ministries', 'Promoting physical, mental, and spiritual wellness in our communities.', 'Joseph Ocharo', 'heart', '#E91E63'),
('Education & Chaplaincy', 'Nurturing minds and spirits through quality education and spiritual guidance.', 'Abednego Lwandanyi', 'graduation-cap', '#2196F3'),
('Youth Ministries', 'Empowering the next generation through dynamic youth programs and mentorship.', 'Kennedy Kirwa', 'users', '#FF9800'),
('Women Ministries', 'Supporting and empowering women in their spiritual and personal development.', 'Emmah Nyabang''a', 'female', '#9C27B0'),
('Children Ministries', 'Nurturing young hearts and minds with age-appropriate spiritual education.', 'Emmah Nyabang''a', 'child', '#4CAF50');

-- Insert field statistics
INSERT INTO field_statistics (total_churches, total_membership, total_population_served, counties_served) VALUES
(393, 41106, 2203357, 5);

-- Insert sample events
INSERT INTO events (title, description, event_date, time, location, category, is_featured) VALUES
('Field Evangelistic Campaign', 'Join us for a week-long evangelistic campaign featuring powerful messages, music, and community outreach.', '2024-03-15', '6:00 PM - 8:30 PM', 'Kitale Stadium', 'evangelism', true),
('Youth Convention', 'Annual youth convention with workshops, music, and spiritual growth sessions.', '2024-03-22', '9:00 AM - 5:00 PM', 'Eldoret Conference Center', 'youth', false),
('Health Fair', 'Free health screenings, consultations, and wellness education across the field.', '2024-03-29', '8:00 AM - 4:00 PM', 'Various Locations', 'health', false);

-- Insert sample sermons
INSERT INTO sermons (title, speaker, sermon_date, description, scripture_reference, thumbnail_url) VALUES
('The Power of Faith', 'Pastor Jackson N. Soet', '2024-03-10', 'An inspiring message about the transformative power of faith in our daily lives.', 'Hebrews 11:1', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'),
('Walking in Love', 'Pastor Joseph Ocharo', '2024-03-03', 'Learning to walk in love as Christ commanded us, showing compassion to all.', '1 Corinthians 13:1-13', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'),
('Hope in Difficult Times', 'Pastor Amos Songa', '2024-02-25', 'Finding hope and strength in God during challenging seasons of life.', 'Romans 8:28', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80');

-- Create indexes for better performance
CREATE INDEX idx_churches_county ON churches(county);
CREATE INDEX idx_churches_district ON churches(district);
CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_sermons_date ON sermons(sermon_date);
CREATE INDEX idx_sermons_speaker ON sermons(speaker);
CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_articles_published ON articles(is_published);
CREATE INDEX idx_articles_category ON articles(category);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_leadership_updated_at BEFORE UPDATE ON leadership FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_departments_updated_at BEFORE UPDATE ON departments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_churches_updated_at BEFORE UPDATE ON churches FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sermons_updated_at BEFORE UPDATE ON sermons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_media_gallery_updated_at BEFORE UPDATE ON media_gallery FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Admin users can only see their own data
CREATE POLICY "Users can view own profile" ON admin_users FOR SELECT USING (auth.uid() = id);

-- Contact messages are readable by admins only
CREATE POLICY "Admins can view contact messages" ON contact_messages FOR SELECT USING (
    EXISTS (
        SELECT 1 FROM admin_users 
        WHERE admin_users.id = auth.uid() 
        AND admin_users.role IN ('admin', 'super_admin')
    )
);

-- Public read access for other tables
CREATE POLICY "Public read access" ON leadership FOR SELECT USING (true);
CREATE POLICY "Public read access" ON departments FOR SELECT USING (true);
CREATE POLICY "Public read access" ON churches FOR SELECT USING (true);
CREATE POLICY "Public read access" ON events FOR SELECT USING (true);
CREATE POLICY "Public read access" ON sermons FOR SELECT USING (true);
CREATE POLICY "Public read access" ON media_gallery FOR SELECT USING (true);
CREATE POLICY "Public read access" ON articles FOR SELECT USING (is_published = true);
CREATE POLICY "Public read access" ON field_statistics FOR SELECT USING (true);
