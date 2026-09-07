async function currentSession() {
  if (!window.sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

async function currentProfile() {
  const s = await currentSession();
  if (!s) return null;

  const { data } = await sb
    .from("profiles")
    .select("*")
    .eq("id", s.user.id)
    .single();

  return data;
}

async function requireAuth() {
  const s = await currentSession();

  if (!s) {
    location.href = "login.html";
    return null;
  }

  return s;
}

async function logout() {
  if (window.sb) await sb.auth.signOut();
  location.href = "index.html";
}

function alertBox(message, type = "success") {
  const el = document.querySelector("#alertBox");

  if (el) {
    el.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
  }
}

function esc(v) {
  return String(v ?? "").replace(/[&<>"']/g, x => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[x]));
}