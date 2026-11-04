# NATA website

Production: https://nata-consulting.vercel.app

GitHub main is connected to the nata-consulting project in Vercel. Pushes to main deploy automatically.

## Assessment delivery

Set ASSESSMENT_WEBHOOK_URL in Vercel project settings, Environment Variables, for Production and Preview. The destination must accept a JSON POST with name, email, website, revenue, budget and challenge. Redeploy after setting the variable. Until configured, the endpoint returns 503 and the form retains the visitor’s inputs; it does not claim successful delivery.

## Custom domain

Add the purchased domain in Vercel Settings → Domains and apply the DNS records Vercel specifies. After connecting it, update the origin in sitemap.xml and robots.txt and add canonical URLs before submitting the sitemap to Google Search Console.

## Content still to complete

Use the actual iSynq product screenshot for Mistiva when the original asset is available. Add Francisco’s approved portrait to About. Do not present a fictitious portrait as Alexey. Keep TRAZZO demonstrations anonymized and methodology on case detail pages.

## Article downloads
The 15 complete articles are published as HTML. Review PDF exports and worksheets are archived outside the deployment until publication-ready exports replace them.
