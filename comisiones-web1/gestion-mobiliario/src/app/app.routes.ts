import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "registro",
    loadChildren: () =>
      import("./features/registro/registro.module").then(
        (m) => m.RegistroModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./features/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "rol",
    loadChildren: () =>
      import("./features/rol/rol.module").then((m) => m.RolModule),
  },
  {
    path: "inventario",
    loadChildren: () =>
      import("./features/inventario/inventario.module").then(
        (m) => m.InventarioModule
      ),
  },
  {
    path: "inventario-solicitud",
    loadChildren: () =>
      import(
        "./features/inventario-solicitud/inventario-solicitud.module"
      ).then((m) => m.InventarioSolicitudModule),
  },
  {
    path: "perfil",
    loadChildren: () =>
      import("./features/perfil/perfil.module").then((m) => m.PerfilModule),
  },
  {
    path: "perfil-solicitud",
    loadChildren: () =>
      import("./features/perfil-solicitudes/perfil-solicitudes.module").then((m) => m.PerfilSolicitudesModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
