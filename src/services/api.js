const API_BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  health: () => request('/health'),

  showreel: {
    list: () => request('/showreel'),
    listAll: () => request('/showreel/all'),
    get: (id) => request(`/showreel/${id}`),
    create: (data) => request('/showreel', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/showreel/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/showreel/${id}`, { method: 'DELETE' }),
  },

  experiences: {
    list: () => request('/experiences'),
    listAll: () => request('/experiences/all'),
    get: (id) => request(`/experiences/${id}`),
    getByCategory: (category) => request(`/experiences/category/${category}`),
    create: (data) => request('/experiences', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/experiences/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/experiences/${id}`, { method: 'DELETE' }),
  },

  gallery: {
    list: () => request('/gallery'),
    listAll: () => request('/gallery/all'),
    create: (data) => request('/gallery', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/gallery/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/gallery/${id}`, { method: 'DELETE' }),
  },

  skills: {
    list: () => request('/skills'),
    listAll: () => request('/skills/all'),
    create: (data) => request('/skills', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/skills/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/skills/${id}`, { method: 'DELETE' }),
  },

  page: {
    contact: () => request('/page/contact'),
    updateContact: (data) => request('/page/contact', { method: 'PUT', body: JSON.stringify(data) }),
    hero: () => request('/page/hero'),
    updateHero: (data) => request('/page/hero', { method: 'PUT', body: JSON.stringify(data) }),
    cta: () => request('/page/cta'),
    updateCta: (data) => request('/page/cta', { method: 'PUT', body: JSON.stringify(data) }),
    footer: () => request('/page/footer'),
    updateFooter: (data) => request('/page/footer', { method: 'PUT', body: JSON.stringify(data) }),
  },

  translations: {
    list: () => request('/translations'),
    byLanguage: (language) => request(`/translations/${language}`),
    upsert: (data) => request('/translations/upsert', { method: 'POST', body: JSON.stringify(data) }),
    bulk: (language, items) => request('/translations/bulk', { method: 'POST', body: JSON.stringify({ language, translations: items }) }),
    update: (id, data) => request(`/translations/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/translations/${id}`, { method: 'DELETE' }),
    autoSync: (data) => request('/realtime/translations/auto-sync', { method: 'POST', body: JSON.stringify(data) }),
  },

  public: {
    getAll: () => request('/public/all'),
  },

  languages: {
    list: () => request('/languages'),
    create: (data) => request('/languages', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/languages/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/languages/${id}`, { method: 'DELETE' }),
  },

  upload: {
    image: async (file) => {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch(`${API_BASE}/upload/image`, { method: 'POST', body: form });
      if (!res.ok) throw new Error('Upload failed');
      return res.json();
    },
    delete: (publicId) => request(`/upload/image/${encodeURIComponent(publicId)}`, { method: 'DELETE' }),
  },

  auth: {
    login: (email, password) => request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  },
};
