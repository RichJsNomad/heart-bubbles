# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple interactive web animation project that creates heart effects following mouse movement. The project consists of three core files:

- `index.html` - Basic HTML structure that loads the CSS and JavaScript
- `index.js` - Mouse event handling and dynamic heart element creation
- `style.css` - Styling for hearts, animations, and layout

## Architecture

### Heart Animation System
- **Event-driven**: Uses `mousemove` event listener on the body element
- **Dynamic element creation**: Creates `<span>` elements at mouse coordinates
- **Class-based styling**: Hearts are assigned random classes (`heart1` or `heart2`) for variety
- **Automatic cleanup**: Hearts are removed after 3 seconds using `setTimeout`
- **CSS animations**: Hearts animate upward with opacity changes and color rotation

### Key Components
- **Mouse tracking**: Captures `event.offsetX/Y` for precise positioning
- **Random sizing**: Each heart gets random dimensions (0-100px)
- **Dual heart types**: 50/50 chance between two different heart images
- **CSS keyframe animation**: 10-second animation with transform, opacity, and filter changes

## Development Commands

Since this is a static web project with no build tools:

- **Run locally**: Open `index.html` directly in a browser or use a local server
- **Test changes**: Refresh the browser after modifying any file
- **No compilation needed**: Direct HTML/CSS/JS - changes are immediately visible

## File Structure

```
heart-project/
├── index.html    # Entry point, loads CSS and JS
├── index.js      # Mouse event handling and heart creation
└── style.css     # Styling, animations, and heart images
```

## Key Implementation Details

- Hearts use external image URLs from CDN sources
- Animation moves hearts from mouse position upward (-5000% transform)
- Background color is set to aqua with viewport height coverage
- Overflow is hidden to prevent scrollbars during animations
- Elements have `pointer-events: none` to avoid interfering with mouse tracking