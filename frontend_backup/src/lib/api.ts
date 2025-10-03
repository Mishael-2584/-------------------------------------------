const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
  pagination?: {
    page?: number
    limit?: number
    total?: number
    offset?: number
  }
}

export interface Church {
  id: string
  name: string
  county: string
  district: string
  location?: string
  pastor?: string
  membership: number
  service_times?: any
  contact_info?: any
  coordinates?: any
  established_date?: string
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description?: string
  event_date: string
  time?: string
  location?: string
  category: string
  image_url?: string
  registration_url?: string
  is_featured: boolean
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Sermon {
  id: string
  title: string
  speaker: string
  sermon_date: string
  description?: string
  scripture_reference?: string
  audio_url?: string
  video_url?: string
  thumbnail_url?: string
  duration?: number
  category: string
  view_count: number
  download_count: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Leader {
  id: string
  name: string
  position: string
  description?: string
  image_url?: string
  email?: string
  phone?: string
  bio?: string
  position_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Department {
  id: string
  name: string
  description?: string
  leader_name?: string
  leader_email?: string
  leader_phone?: string
  icon?: string
  color?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Request failed')
      }

      return data
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Churches API
  async getChurches(params?: {
    county?: string
    district?: string
    limit?: number
    offset?: number
  }): Promise<ApiResponse<Church[]>> {
    const searchParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString())
        }
      })
    }
    
    const queryString = searchParams.toString()
    return this.request(`/churches${queryString ? `?${queryString}` : ''}`)
  }

  async getChurch(id: string): Promise<ApiResponse<Church>> {
    return this.request(`/churches/${id}`)
  }

  async getChurchStats(): Promise<ApiResponse<any>> {
    return this.request('/churches/stats/overview')
  }

  // Events API
  async getEvents(): Promise<ApiResponse<Event[]>> {
    return this.request('/events')
  }

  async getEvent(id: string): Promise<ApiResponse<Event>> {
    return this.request(`/events/${id}`)
  }

  // Sermons API
  async getSermons(params?: {
    page?: number
    limit?: number
    speaker?: string
    category?: string
  }): Promise<ApiResponse<Sermon[]>> {
    const searchParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString())
        }
      })
    }
    
    const queryString = searchParams.toString()
    return this.request(`/sermons${queryString ? `?${queryString}` : ''}`)
  }

  async getSermon(id: string): Promise<ApiResponse<Sermon>> {
    return this.request(`/sermons/${id}`)
  }

  async getSpeakers(): Promise<ApiResponse<string[]>> {
    return this.request('/sermons/speakers/list')
  }

  // Leadership API
  async getLeadership(): Promise<ApiResponse<Leader[]>> {
    return this.request('/leadership')
  }

  async getLeader(id: string): Promise<ApiResponse<Leader>> {
    return this.request(`/leadership/${id}`)
  }

  // Departments API
  async getDepartments(): Promise<ApiResponse<Department[]>> {
    return this.request('/departments')
  }

  async getDepartment(id: string): Promise<ApiResponse<Department>> {
    return this.request(`/departments/${id}`)
  }

  // Contact API
  async submitContact(message: ContactMessage): Promise<ApiResponse<any>> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(message),
    })
  }

  // Health check
  async healthCheck(): Promise<ApiResponse<any>> {
    return this.request('/health')
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
