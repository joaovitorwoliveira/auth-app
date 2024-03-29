/**
 * Um array de rotas que são públicas, ou seja, não precisam de autenticação.
 * @type {string[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];
/**
 * Um array de rotas que são utilizadas para autenticação.
 * Essas rotas irão redirecionar usuários autenticados para /settings.
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * O prefixo da API de autenticação.
 * Rotas que começam com este prefixo são rotas de autenticação.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * O Caminho padrão para redirecionar usuários autenticados.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
