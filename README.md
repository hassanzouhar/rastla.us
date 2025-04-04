# rastla.us
Okay, here is a compelling `README.md` file for your project. It explains what the project is, its features, how to use it, and how to customize it further.

```markdown
# Dynamic Neural Network Landing Page

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

A visually captivating, single-file HTML landing page featuring a complex, dynamic neural network simulation as a background. Designed to be lightweight and easy to deploy, using only the `tsParticles` library loaded via CDN.

This specific version is personalized for **Hassan Zouhar**, showcasing a name/logo with a terminal-style blinking cursor, a descriptive subtitle in Norwegian, and social media profile links.

<!-- Add a GIF or Screenshot here! It's highly recommended for visual projects. -->
<!-- Example: ![Landing Page Preview](preview.gif) -->
**(Add a GIF or screenshot of the landing page in action here!)**

## ✨ Features

*   **Single File Deployment:** The entire project (HTML, CSS, JS) is contained within a single `.html` file for ultimate portability.
*   **Complex Background Simulation:** Uses `tsParticles` to generate an animated background mimicking neural pathways:
    *   **Node Lifecycles:** Particles (nodes) fade in and out, simulating creation and decay.
    *   **Dynamic Links:** Connections appear and disappear based on node proximity and opacity.
    *   **Clustering:** Subtle attraction forces create denser regions, mimicking neural clusters.
    *   **Interactive Signal:** Hovering over the canvas creates a bright, high-opacity link to the cursor ("grab" mode), simulating signal propagation.
    *   **Subtle Flow:** A slight directional bias adds a dynamic flow to the particle movement.
*   **Centered Content:** Logo text, subtitle, and social icons are perfectly centered vertically and horizontally using CSS Flexbox.
*   **Personalized Branding:** Includes the logo `> hassanzouhar _` with a blinking cursor effect.
*   **Social Media Links:** Integrated SVG icons for GitHub, LinkedIn, and Mastodon (easily expandable).
*   **Responsive Design:** Basic responsiveness ensures usability on different screen sizes.
*   **Minimal Dependencies:** Relies solely on the `tsParticles` library loaded via CDN – no build process required.
*   **Performance Aware:** Includes `fpsLimit` and `detectRetina` settings in the particle configuration. Link triangles can be disabled for further optimization if needed.

## 🚀 Technology Stack

*   **HTML5**
*   **CSS3:** Modern CSS features including Flexbox, Animations (`@keyframes`), Gradients.
*   **JavaScript (ES6+):** For particle simulation initialization.
*   **[tsParticles](https://github.com/matteobruni/tsparticles):** The single JavaScript library used for the particle animation (version `2.12.0` as per the CDN link).

## 🔧 Getting Started / Usage

1.  **Save the Code:** Copy the entire HTML code provided and save it as an `.html` file (e.g., `index.html`).
2.  **Open in Browser:** Double-click the saved HTML file, or open it using your web browser's "File > Open" menu.

That's it! The landing page should load with the dynamic background and centered content.

## ⚙️ Customization

Editing this single-file project is straightforward:

1.  **Text Content:**
    *   **Logo:** Modify the text inside the `<h1 class="logo">...</h1>` tag. The `<span class="cursor">_</span>` creates the blinking cursor.
    *   **Subtitle:** Change the text within the `<p class="subtitle">...</p>` tag.

2.  **Social Icons:**
    *   Locate the `<div class="social-icons">...</div>` section.
    *   **Update Links:** Replace the `#` placeholder in the `href="..."` attribute of each `<a>` tag with your actual profile URLs. Remember to update the Mastodon link with your instance URL as well.
    *   **Add/Remove Icons:**
        *   To remove an icon, delete its corresponding `<a>...</a>` block.
        *   To add an icon, copy an existing `<a>...</a>` block, update the `href`, `aria-label`, and replace the `<svg>...</svg>` content with the SVG code for the desired icon (you can find free SVG icons online from sources like Simple Icons, Feather Icons, etc.). Ensure the new SVG has `fill="currentColor"` if you want it to inherit the link color. Limit to ~5 icons for clean layout.

3.  **Particle Simulation (`tsParticles` Config):**
    *   Find the `<script>...</script>` block at the end of the `<body>`.
    *   The `const particlesConfig = { ... };` object contains all the settings for the background animation.
    *   **Key areas to tweak:**
        *   `particles.number.value`: Number of nodes.
        *   `particles.color.value`: Array of node colors.
        *   `particles.opacity`: Controls node fading (lifespan).
        *   `particles.size`: Node size and animation.
        *   `particles.links`: Settings for connections (distance, opacity, color, width). Toggle `triangles.enable` for performance.
        *   `particles.move`: Speed, direction (`"bottom-right"` currently), attraction (`attract.rotate` controls strength).
        *   `interactivity.modes.grab.links`: Opacity and color of the link drawn to the cursor on hover.
    *   **Caution:** Modifying these settings can significantly impact appearance and performance. Refer to the [tsParticles Documentation](https://particles.js.org/docs/index.html) (note: link points to successor documentation, concepts are similar) for detailed options.

4.  **Styling (CSS):**
    *   All styles are within the `<style>...</style>` block in the `<head>`.
    *   Change fonts (`font-family`), colors (`color`, `background`), text shadows (`text-shadow`), gradients (`background: radial-gradient(...)`), icon sizes, etc. here.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details (or include the MIT license text directly if not using a separate file).

```
MIT License

Copyright (c) [Year] [Your Name/Hassan Zouhar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgements

*   **[tsParticles](https://github.com/matteobruni/tsparticles)** by Matteo Bruni for the fantastic particle animation library.
*   SVG Icons sourced from various open repositories (implicitly).

---

*Remember to replace placeholders like `[Year]` and `[Your Name/Hassan Zouhar]` in the license text, and add an actual preview image/GIF.*
