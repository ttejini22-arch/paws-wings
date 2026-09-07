(() => {
  const c = window.PAWS_CONFIG;
  if (!c || c.url.startsWith("YOUR_") || c.key.startsWith("YOUR_")) {
    window.sb = null;
    console.warn("Add Supabase URL and publishable key in assets/js/config.js");
    return;
  }
  window.sb = supabase.createClient(c.url, c.key);
})();
