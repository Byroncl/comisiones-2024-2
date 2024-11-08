import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "administrador-historial",
    loadChildren: () =>
      import("./features/administrador-historial/administrador-historial.module").then(
        (m) => m.AdministradorHistorialModule
      ),
  },
  {
    path: "administrador",
    loadChildren: () =>
      import("./features/administrador/administrador.module").then(
        (m) => m.AdministradorModule
      ),
  },
  {
    path: "perfil-historial",
    loadChildren: () =>
      import("./features/perfil-historial/perfil-historial.module").then(
        (m) => m.PerfilHistorialModule
      ),
  },
  {
    path: "perfil",
    loadChildren: () =>
      import("./features/perfil/perfil.module").then((m) => m.PerfilModule),
  },
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
    path: "servicios",
    loadChildren: () =>
      import("./features/servicio/servicio.module").then(
        (m) => m.ServicioModule
      ),
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
