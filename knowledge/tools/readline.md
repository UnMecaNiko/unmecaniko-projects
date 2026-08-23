# Atajos de línea — GNU Readline (modo Emacs)

Edición de la línea de comandos estilo Emacs. Aplican en bash, en SSH al VPS,
en WSL y en cualquier programa que use Readline (Python, MySQL, etc.). En zsh
aplican si el keymap es `emacs` (el default).

En Windows, `Alt` a veces lo captura la ventana: si `Alt-d` / `Alt-f` / `Alt-b`
no responden, usar `Esc` y luego la letra (`Esc` `d`, `Esc` `f`, `Esc` `b`).

No son los atajos por defecto de PowerShell (PSReadLine en modo Windows).

| Atajo | Qué hace |
|---|---|
| `Ctrl-a` | Ir al inicio de la línea |
| `Ctrl-e` | Ir al final de la línea |
| `Ctrl-k` | Borrar desde el cursor hasta el final de la línea |
| `Ctrl-w` | Borrar la palabra anterior |
| `Alt-d` | Borrar la palabra siguiente |
| `Alt-f` | Avanzar una palabra |
| `Alt-b` | Retroceder una palabra |
| `Ctrl-n` | Bajar en el historial |
| `Ctrl-p` | Subir en el historial |
