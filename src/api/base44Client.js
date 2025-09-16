import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68c42f9d2467a3929932fc81", 
  requiresAuth: true // Ensure authentication is required for all operations
});
