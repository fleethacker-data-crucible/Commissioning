"""Render MORGAN's locked-down Windows desktop for the pitch (scene B).

A classic Windows PowerShell 5.1 console over the standard Windows 11 wallpaper and taskbar.
The commands and output are the real transcript from the locked-down laptop (python --version,
then winget install --id Git.Git -e), typed character by character. After the installer is
downloaded and verified, Windows App Control for Business blocks it and a dialog appears, then
the mouse closes it and winget prints its error.

What is real: every line of console output (copied from the transcript Anthony captured).
What is simulated: the typing, the progress-bar animation and the mouse.
What is unconfirmed and set below: the dialog's title bar, file path and button label.

Usage: python make_terminal_screen.py <out.mp4> <stills_dir>
Optional env: POPUP_TITLE, POPUP_PATH, POPUP_BUTTON, WINDOW_TITLE
"""
import os
import random
import re
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT_MP4, STILLS = sys.argv[1], sys.argv[2]
os.makedirs(STILLS, exist_ok=True)
W, H, FPS = 1920, 1080, 24

POPUP_TITLE = os.environ.get("POPUP_TITLE", "Git-2.56.0.4-64-bit.exe")
POPUP_PATH = os.environ.get("POPUP_PATH", r"C:\Users\MORGAN\AppData\Local\Temp\WinGet\Git.Git.2.56.0.4\Git-2.56.0.4-64-bit.exe")
POPUP_BUTTON = os.environ.get("POPUP_BUTTON", "Close")
WINDOW_TITLE = os.environ.get("WINDOW_TITLE", "Windows PowerShell")
POPUP_HEAD = "Your organization used App Control for Business to block this app"
POPUP_FOOT = "Contact your support person for more info."

WALL = "C:/Windows/Web/Wallpaper/Windows/img0.jpg"
CONS = "C:/Windows/Fonts/consola.ttf"
SEGOE = "C:/Windows/Fonts/segoeui.ttf"
SEGOE_SB = "C:/Windows/Fonts/seguisb.ttf"
ICONS = "C:/Windows/Fonts/SegoeIcons.ttf"

BG, FG = (1, 36, 86), (238, 237, 240)
FS, LH, ROWS, COLS = 22, 25, 30, 120
font = ImageFont.truetype(CONS, FS)
CW = font.getlength("M")
PROMPT = "PS C:\\Windows\\system32> "
BAR_N = 30
SIZE_TOTAL = 63.7

PY_MSG = ("Python was not found; run without arguments to install from the Microsoft Store, or disable this "
          "shortcut from Settings > Apps > Advanced app settings > App execution aliases.")


def hard_wrap(s, n=COLS):
    return [s[i:i + n] for i in range(0, len(s), n)]      # conhost wraps at the column, mid-word


# ---- timeline ------------------------------------------------------------------------------
rnd = random.Random(11)
snaps = []
lines = [("T", "Windows PowerShell"), ("T", "Copyright (C) Microsoft Corporation. All rights reserved."), ("T", "")]
inp = ""
t = 0.9


def snap(tm, text_in, prompt_on, last):
    snaps.append((tm, list(lines), text_in, prompt_on, last))


def type_cmd(cmd):
    global t, inp
    inp = ""
    for i, ch in enumerate(cmd):
        t += 0.075 + rnd.random() * 0.07 + (0.04 if ch == " " else 0) + (0.22 if (i == 0 and rnd.random() < 0.5) else 0)
        inp += ch
        snap(t, inp, True, t)
    t += 0.42                                              # Enter
    lines.append(("T", PROMPT + cmd))
    inp = ""
    snap(t, "", False, t)


snap(0.0, "", True, 0.0)

# 1. python --version -> the Microsoft Store alias message
type_cmd("python --version")
t += 0.45
for l in hard_wrap(PY_MSG):
    lines.append(("T", l))
snap(t, "", True, t)
t += 1.5

# 2. winget install --id Git.Git -e
type_cmd("winget install --id Git.Git -e")
t += 1.0
lines.append(("T", "Found Git [Git.Git] Version 2.56.0.4"))
snap(t, "", False, t)
t += 0.3
lines.append(("T", "This application is licensed to you by its owner."))
lines.append(("T", "Microsoft is not responsible for, nor does it grant any licenses to, third-party packages."))
snap(t, "", False, t)
t += 0.4
lines.append(("T", "Downloading https://github.com/git-for-windows/git/releases/download/v2.56.0.windows.4/Git-2.56.0.4-64-bit.exe"))
snap(t, "", False, t)
t += 0.25
STEPS = 34
for k in range(STEPS + 1):
    frac = (k / STEPS) ** 0.85
    n = int(BAR_N * frac)
    mb = SIZE_TOTAL * frac
    snaps.append((t, list(lines) + [("BAR", n, "%.1f MB / %.1f MB" % (mb, SIZE_TOTAL))], "", False, t))
    t += 0.095
lines.append(("BAR", BAR_N, "%.1f MB / %.1f MB" % (SIZE_TOTAL, SIZE_TOTAL)))
snap(t, "", False, t)
t += 0.4
lines.append(("T", "Successfully verified installer hash"))
snap(t, "", False, t)
t += 0.6
lines.append(("T", "Starting package install..."))
snap(t, "", False, t)
t += 1.1
lines.append(("T", "The installer will request to run as administrator. Expect a prompt."))
snap(t, "", False, t)

POP0 = t + 1.3
POP1 = POP0 + 5.3                                          # held on screen for the voice line
t = POP1 + 0.9
lines.append(("T", "An unexpected error occurred while executing the command:"))
lines.append(("T", "0x8007029c : An assertion failure has occurred."))
snap(t, "", True, t)
END = t + 2.8


# ---- static layers -------------------------------------------------------------------------
def cover(img, w, h):
    s = max(w / img.width, h / img.height)
    img = img.resize((int(img.width * s) + 1, int(img.height * s) + 1), Image.LANCZOS)
    x, y = (img.width - w) // 2, (img.height - h) // 2
    return img.crop((x, y, x + w, y + h))


base = cover(Image.open(WALL).convert("RGB"), W, H).convert("RGBA")
CLIENT_W = int(COLS * CW) + 17
WIN_W, WIN_H = CLIENT_W + 2, 40 + ROWS * LH + 2
WX, WY = (W - WIN_W) // 2, 70
CX, CY = WX + 1, WY + 40

shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(shadow).rectangle((WX, WY + 8, WX + WIN_W, WY + WIN_H + 8), fill=(0, 0, 0, 150))
base = Image.alpha_composite(base, shadow.filter(ImageFilter.GaussianBlur(20)))
d = ImageDraw.Draw(base)
d.rectangle((WX, WY, WX + WIN_W, WY + WIN_H), fill=(255, 255, 255), outline=(122, 122, 122))
d.rectangle((CX, CY, CX + CLIENT_W - 1, CY + ROWS * LH - 1), fill=BG)
d.rounded_rectangle((WX + 12, WY + 12, WX + 28, WY + 28), radius=3, fill=BG)
d.text((WX + 15, WY + 11), ">_", font=ImageFont.truetype(CONS, 12), fill=(255, 255, 255))
d.text((WX + 40, WY + 9), WINDOW_TITLE, font=ImageFont.truetype(SEGOE, 15), fill=(0, 0, 0))
bx = WX + WIN_W - 46 * 3
d.line((bx + 18, WY + 20, bx + 28, WY + 20), fill=(0, 0, 0), width=1)
d.rectangle((bx + 46 + 18, WY + 15, bx + 46 + 28, WY + 25), outline=(0, 0, 0))
d.line((bx + 92 + 18, WY + 15, bx + 92 + 28, WY + 25), fill=(0, 0, 0), width=1)
d.line((bx + 92 + 28, WY + 15, bx + 92 + 18, WY + 25), fill=(0, 0, 0), width=1)
sx = CX + CLIENT_W - 17
d.rectangle((sx, CY, sx + 16, CY + ROWS * LH - 1), fill=(240, 240, 240))
d.rectangle((sx + 3, CY + 4, sx + 13, CY + ROWS * LH - 24), fill=(193, 193, 193))
TB = 48
d.rectangle((0, H - TB, W, H), fill=(243, 243, 243))
d.line((0, H - TB, W, H - TB), fill=(220, 220, 220))
icon = ImageFont.truetype(ICONS, 20)
cy = H - TB // 2
x0 = 960 - 88
sx0 = x0 + 22
for dx in (0, 10):
    for dy in (0, 10):
        d.rectangle((sx0 - 10 + dx, cy - 10 + dy, sx0 - 10 + dx + 8, cy - 10 + dy + 8), fill=(0, 120, 212))
d.text((x0 + 44 + 22, cy), "\ue721", font=icon, fill=(30, 30, 30), anchor="mm")
d.text((x0 + 88 + 22, cy), "\ue8b7", font=icon, fill=(236, 170, 20), anchor="mm")
d.rounded_rectangle((x0 + 132 + 2, cy - 20, x0 + 132 + 42, cy + 20), radius=6, fill=(255, 255, 255), outline=(225, 225, 225))
d.rounded_rectangle((x0 + 132 + 11, cy - 11, x0 + 132 + 33, cy + 11), radius=4, fill=BG)
d.text((x0 + 132 + 14, cy - 9), ">_", font=ImageFont.truetype(CONS, 13), fill=(255, 255, 255))
d.rounded_rectangle((x0 + 132 + 14, cy + 15, x0 + 132 + 30, cy + 17), radius=1, fill=(0, 103, 192))
for ix, gl in ((1700, "\ue70e"), (1740, "\ue839"), (1780, "\ue767")):
    d.text((ix, cy), gl, font=icon, fill=(30, 30, 30), anchor="mm")
small = ImageFont.truetype(SEGOE, 13)
d.text((1888, cy - 15), "9:01 AM", font=small, fill=(20, 20, 20), anchor="ra")
d.text((1888, cy + 1), "11/4/2026", font=small, fill=(20, 20, 20), anchor="ra")
base = base.convert("RGB")


# ---- the App Control dialog ----------------------------------------------------------------
f_head = ImageFont.truetype(SEGOE_SB if os.path.exists(SEGOE_SB) else SEGOE, 18)
f_body = ImageFont.truetype(SEGOE, 15)
f_title = ImageFont.truetype(SEGOE, 13)
DW, PADX = 560, 28


def wrap_px(text, fnt, width):
    toks = re.findall(r"[^\s\\]+\\?|\s+|\\", text) if "\\" in text else re.findall(r"\S+\s*", text)
    out, cur = [], ""
    for tk in toks:
        if fnt.getlength((cur + tk).rstrip()) <= width:
            cur += tk
        else:
            out.append(cur.rstrip())
            cur = tk.lstrip()
    if cur:
        out.append(cur.rstrip())
    return out


head_l = wrap_px(POPUP_HEAD, f_head, DW - 2 * PADX)
path_l = wrap_px(POPUP_PATH, f_body, DW - 2 * PADX)
foot_l = wrap_px(POPUP_FOOT, f_body, DW - 2 * PADX)
TEXT_H = len(head_l) * 26 + 12 + len(path_l) * 21 + 14 + len(foot_l) * 21
DH = 32 + 26 + TEXT_H + 26 + 64
DX = WX + WIN_W // 2 - DW // 2
DY = WY + WIN_H // 2 - DH // 2 - 10
BTN = (DX + DW - PADX - 100, DY + DH - 64 + 17, DX + DW - PADX, DY + DH - 64 + 17 + 32)
BTN_CENTER = ((BTN[0] + BTN[2]) // 2, (BTN[1] + BTN[3]) // 2)


def draw_dialog(im, hover, pressed):
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rectangle((DX, DY + 6, DX + DW, DY + DH + 6), fill=(0, 0, 0, 110))
    im.paste(Image.alpha_composite(im.convert("RGBA"), sh.filter(ImageFilter.GaussianBlur(16))).convert("RGB"))
    dd = ImageDraw.Draw(im)
    dd.rectangle((DX, DY, DX + DW, DY + DH), fill=(255, 255, 255), outline=(110, 110, 110))
    dd.text((DX + 12, DY + 8), POPUP_TITLE, font=f_title, fill=(0, 0, 0))
    dd.line((DX + DW - 30, DY + 11, DX + DW - 20, DY + 21), fill=(0, 0, 0))
    dd.line((DX + DW - 20, DY + 11, DX + DW - 30, DY + 21), fill=(0, 0, 0))
    y = DY + 32 + 26
    for l in head_l:
        dd.text((DX + PADX, y), l, font=f_head, fill=(0, 0, 0)); y += 26
    y += 12
    for l in path_l:
        dd.text((DX + PADX, y), l, font=f_body, fill=(60, 60, 60)); y += 21
    y += 14
    for l in foot_l:
        dd.text((DX + PADX, y), l, font=f_body, fill=(0, 0, 0)); y += 21
    dd.rectangle((DX + 1, DY + DH - 64, DX + DW - 1, DY + DH - 1), fill=(240, 240, 240))
    fill, edge = ((204, 228, 247), (0, 84, 153)) if pressed else (((229, 241, 251), (0, 120, 215)) if hover else ((253, 253, 253), (173, 173, 173)))
    dd.rectangle(BTN, fill=fill, outline=edge)
    dd.text(BTN_CENTER, POPUP_BUTTON, font=f_body, fill=(0, 0, 0), anchor="mm")


def draw_arrow(dd, x, y):
    pts = [(0, 0), (0, 18), (4.5, 14), (7.5, 21), (10.5, 19.5), (7.5, 13), (13, 13)]
    pts = [(x + px * 1.1, y + py * 1.1) for px, py in pts]
    dd.polygon(pts, fill=(255, 255, 255), outline=(0, 0, 0))


M_REST = (1330, 380)
M_START = POP1 - 1.25
M_ARRIVE = POP1 - 0.45


def mouse_at(tm):
    if tm < POP0:
        return None
    if tm < M_START:
        return M_REST
    if tm >= M_ARRIVE:
        return BTN_CENTER
    u = (tm - M_START) / (M_ARRIVE - M_START)
    u = u * u * (3 - 2 * u)
    return (int(M_REST[0] + (BTN_CENTER[0] - M_REST[0]) * u), int(M_REST[1] + (BTN_CENTER[1] - M_REST[1]) * u))


def render(si, cursor_on, pop_on, mouse, hover, pressed):
    _, ls, text_in, prompt_on, _ = snaps[si]
    im = base.copy()
    dd = ImageDraw.Draw(im)
    vis = list(ls)
    if prompt_on:
        vis.append(("T", PROMPT + text_in))
    vis = vis[-ROWS:]
    for i, ln in enumerate(vis):
        y = CY + i * LH
        if ln[0] == "T":
            if ln[1]:
                dd.text((CX, y + 1), ln[1], font=font, fill=FG)
        else:
            _, n, size = ln
            for c in range(BAR_N):
                xc = CX + (2 + c) * CW
                if c < n:
                    dd.rectangle((xc, y, xc + CW, y + LH - 1), fill=FG)
                else:
                    for yy in range(y, y + LH - 1, 2):
                        for xx in range(int(xc), int(xc + CW), 2):
                            dd.point((xx + ((yy - y) // 2) % 2, yy), fill=FG)
            dd.text((CX + (2 + BAR_N + 2) * CW, y + 1), size, font=font, fill=FG)
    if prompt_on and cursor_on:
        cxp = CX + len(vis[-1][1]) * CW
        cyp = CY + (len(vis) - 1) * LH
        dd.rectangle((cxp, cyp + LH - 6, cxp + CW - 1, cyp + LH - 2), fill=FG)
    if pop_on:
        draw_dialog(im, hover, pressed)
    if mouse:
        draw_arrow(ImageDraw.Draw(im), mouse[0], mouse[1])
    return im


def snap_index(tm):
    k = 0
    for i, s in enumerate(snaps):
        if s[0] <= tm:
            k = i
    return k


def frame_state(tm):
    si = snap_index(tm)
    last = snaps[si][4]
    typing = (tm - last) < 0.55
    on = True if typing else (int((tm - last) / 0.53) % 2 == 0)
    pop_on = POP0 <= tm < POP1
    mouse = mouse_at(tm)
    hover = bool(mouse) and BTN[0] <= mouse[0] <= BTN[2] and BTN[1] <= mouse[1] <= BTN[3]
    pressed = pop_on and tm >= POP1 - 0.2
    return si, on, pop_on, mouse, hover, pressed


cache = {}
ff = subprocess.Popen(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24",
                       "-s", "%dx%d" % (W, H), "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-crf", "12",
                       "-preset", "medium", "-pix_fmt", "yuv420p", OUT_MP4], stdin=subprocess.PIPE)
n = int(END * FPS)
for f in range(n):
    key = frame_state(f / FPS)
    if key not in cache:
        cache[key] = render(*key).tobytes()
        if len(cache) > 90:
            cache.pop(next(iter(cache)))
    ff.stdin.write(cache[key])
ff.stdin.close()
ff.wait()

for name, tm in (("bar-mid", POP0 - 6.0), ("popup", POP0 + 2.0), ("final", END - 0.2)):
    render(*frame_state(min(max(tm, 0), END - 0.05))).save(os.path.join(STILLS, "morgan-terminal-%s.png" % name))
print("frames", n, "seconds", round(END, 1), "popup", round(POP0, 1), "to", round(POP1, 1), "dialog", DW, DH, "button", BTN)
