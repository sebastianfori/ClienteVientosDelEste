export const environment = {
  production: true,
  requestDelay: 0,
  requestTimeout: 15000,
  api: {
    inMemory: false,
    url: 'https://api.vientosdeleste.combobulativedesigns.net',
    endpoints: {
      login: '/login',
      logout: '/logout',
      users: '/users',
      categories: '/categories',
      parts: '/parts',
      diagrams: '/diagrams',
      userDiagrams: '/user-diagrams',
      auditorDiagrams: '/auditor-diagrams',
    }
  }
};
