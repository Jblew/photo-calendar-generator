# present-calendar-generator

Present calendar generator (initially made for Dominika&amp;Daniel wedding)

## Usage

1. Setup nodejs or run in nodejs-enabled container
2. Clone the repository
    ```bash
    git clone git@github.com:Jblew/photo-calendar-generator.git
    ```
3. Install the dependencies
    ```bash
    npm install
    ```
4. Paste all your photos into the photos directory
5. Enter significant dates that you want to be included in the calendar into the `significant-dates.txt` file. 
   The format is `dd.mm TEXT` (printed in every year) or `dd.mm.yyyy TEXT` (printed only once)
6. Configure the calendar in the `src/config.ts` file:
    ```ts
    {
        // ...
        startDate: new Date("2022-05-01T00:00:00Z"), // Use UTC ISO date because otherwise summer time changes messes with dates
        pages: [
            // possible layouts:
            // "single" | "double" | "triple" | "four" | "four-asym" | "six" | "ltb" | "tbr" | "l-five" | "r-five"
            { graphicsLayout: "single", photoFilenames: ["default.jpg"] },
             // { random: true } will use random arrangement and random photos
            ...[...Array(23)].map(i => ({ random: true } as const)),
        ],
        // the number of pages is based on the length of the above array
        // you can also change the month names, days of weeks and paths using other config fields
        // ...
    }
    ```
7. Run 
    ```bash
    npm run build
    ```
8. Run 
    ```bash
    npm serve
    ```
9. Open [http://localhost:8080/](http://localhost:8080/) in your browser.
    > What you see is not a print layout. The screen layout differs from what you will get in the print.
10. Click Ctrl+P or select print from the browser window menu. Set page size to A3 for best results. You may have to wait a substantial amount of time until the preview becomes available. The time depends on the resolution and count of photos used. (24 month * 5K photos may take even 20 minutes).
11. Print to PDF
12. _(optional)_ Play with the layout settings using `src/style/*.scss` files. Hitting `npm run build` will compile both the HTML and SCSS.

