# Deploy to Vercel

This project is now ready to be deployed to Vercel.

## Option 1: Deploy with Vercel CLI (Recommended)

1.  Install Vercel CLI if you haven't:
    ```bash
    npm i -g vercel
    ```
2.  Run the deploy command from the project root:
    ```bash
    vercel
    ```
3.  Follow the prompts. Vercel will detect the Vite configuration.
4.  **Important:** When asked about Environment Variables, you can add `VITE_GEMINI_API_KEY`.
    - If you don't add it, the app will use the fallback key (for now), but it is recommended to set this variable in your Vercel Project Settings for security.

## Option 2: Deploy via Vercel Dashboard (Git)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project in Vercel.
3.  Vercel will detect Vite.
4.  Add the Environment Variable `VITE_GEMINI_API_KEY` in the project settings.
5.  Click **Deploy**.

## Configuration Details

-   **Framework Preset:** Vite
-   **Build Command:** `npm run build`
-   **Output Directory:** `dist`
-   **Environment Variables:**
    -   `VITE_GEMINI_API_KEY`: Your Google Gemini API Key.
