import { RoleRepository } from "../repositories";

export class RolesService {
  static async getRoles() {
    return RoleRepository.getAll()
      .then((roles) => roles)
      .catch((error) => {
        throw new Error(`Error fetching roles by userId: ${error.message}`);
      });
  }

  static async getRolesByUserId(userId: string) {
    const roles = await this.getRoles()
    return RoleRepository.getByUserId(userId)
      .then(userRoles => userRoles.map(userRole => roles.find(r => r.id === userRole.roleId).title))
      .catch((error) => {
        throw new Error(`Error fetching roles by userId: ${error.message}`);
      });
  }
}