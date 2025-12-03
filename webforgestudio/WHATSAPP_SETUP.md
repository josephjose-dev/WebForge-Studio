# WhatsApp Setup Instructions

## Important: WhatsApp Number

The site currently uses the WebForge Studio WhatsApp Business number:

```
https://wa.me/918921275034?text=Hi%20I%20want%20to%20build%20a%20website%20for%20my%20business
```

If you ever need to change this number, update the constants in:

1. **`components/Hero.tsx`**
2. **`components/Contact.tsx`**
3. **`app/projects/*/page.tsx`** for any demo CTA buttons

### Testing:

After updating, test the buttons:
- Hero section WhatsApp CTA
- Contact section CTA ("Get Quote on WhatsApp")
- Any project demo WhatsApp buttons

All CTAs should open WhatsApp in a new tab with the pre-filled message: "Hi I want to build a website for my business"




