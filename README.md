# harding-list
developer test for crowdhub

## Initial Notes - Menus
Top bar looks to contain menu icon, back arrow, location name, and notification status.

Sub menu looks to contain filter information (date range, area of interest), and a filter toggle.

Bottom menu looks to contain the three main app aspects:
1. Home page (General landing screen)
2. Stories Page (A few testimonials)
3. Volunteering Page (Find someway to volunteer)

## Initial Notes - Content
Content in blocks looks like pretty basic. Every block as an event title, area of interest, image, small "about" paragraph, date range, and a button to learn more that probably takes the user to the full event page.

## Initial Notes - Building Blocks
- A Community Connector logo - nowhere on mockup, perhaps homepage banner
- Same logo, but dark
- Various directional / Menu icons
    - Action Checkmark (complete)
    - Action Arrow
    - Down Arrows
    - Back Arrow
    - Empty/Full Hearts (favorite icons)
    - Filter Icon
    - Menu Icon
    - Loading Animations
    - Add Button
    - Share Button
    - Home, Stories, Volunteering Logos

## Strategy
### Appearance
Mobile First

### HTML structure
App div
    location (home, stories, volunteering) div
        menu/submenu div
        Contents Div
            Content Divs
    Bottom Menu Div

### Functionality
JavaScript will trigger switch between three locations, change active color on icons.

