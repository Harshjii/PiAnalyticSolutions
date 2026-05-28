/**
 * Simple secrets manager that reads from environment variables.
 * In production, this should be replaced with a proper secrets management solution.
 */

export function getSecret(key: string): string | null {
  return process.env[key] || null;
}