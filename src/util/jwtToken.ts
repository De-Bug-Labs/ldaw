import jwt_decode from "jwt-decode";
const token = {
  getCookieVal(name: string): string {
    const cookieTok =
      document.cookie.split("; ").find((row) => row.startsWith(`${name}=`)) ??
      "";
    return cookieTok.split("=")[1];
  },

  getToken(): { permissions: string[] } {
    try {
      return jwt_decode(this.getCookieVal("token"));
    } catch (error) {
      return { permissions: [] as string[] };
    }
  },

  hasRole(role: string): boolean {
    return this.getToken().permissions.indexOf(role) !== -1;
  },
};

export default token;
