# Examen_1_DWEC_David_Terreu

Repositorio local del examen (ficheros de ejemplo: `index.html`, `main.js`).

Cómo subir esta carpeta a GitHub

1) Comprobar que tienes Git instalado:

   git --version

2) Inicializar el repositorio local y hacer el primer commit:

   cd "/home/usua5pc11/Escritorio/Entorno cliente/Examen_1_DWEC_David_Terreu"
   git init
   git add .
   git commit -m "Primer commit: proyecto examen"

Nota: si no tienes configurado tu nombre/email en git global, configúralo usando:

   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email"

3) Crear el repositorio remoto (elige una de las dos opciones):

   Opción A — manual (más sencillo):
   - Ve a https://github.com y crea un nuevo repositorio (botón "New repository").
   - Ponle un nombre (por ejemplo `Examen_1_DWEC_David_Terreu`) y elige si quieres público o privado.
   - No marques "Initialize with a README" si ya tienes uno local.

   Opción B — usando GitHub CLI (`gh`):

   gh repo create MiUsuario/Examen_1_DWEC_David_Terreu --public --source=. --remote=origin --push

   (sustituye `MiUsuario` por tu usuario de GitHub; `--public` por `--private` si quieres privado).

4) Si creaste el repo en la web, añade el remote y sube (ejemplo):

   git remote add origin https://github.com/TuUsuario/Examen_1_DWEC_David_Terreu.git
   git branch -M main
   git push -u origin main

5) Verifica en GitHub que los archivos aparecen en el repositorio remoto.

Consejos rápidos
- Cambia `main` por `master` si tu organización usa ese nombre de rama; la mayoría utiliza `main` ahora.
- Si tienes autenticación 2FA, GitHub pedirá un token o usarás el `gh` CLI para autenticar más fácilmente.

Si quieres, puedo:
- Inicializar el repositorio local y hacer el primer commit por ti (no haré el push remoto sin tu confirmación).
- O bien darte los comandos paso a paso y ayudarte a crear el repo remoto desde la web o con `gh`.
