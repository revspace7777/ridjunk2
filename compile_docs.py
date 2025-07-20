import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
import time
import os

def scrape_and_convert_url(url, session):
    """
    Fetches the content of a URL, extracts the main article body,
    and converts it to Markdown.

    Args:
        url (str): The URL to scrape.
        session (requests.Session): The session object to use for the request.

    Returns:
        tuple: A tuple containing the page title (str) and the cleaned
               Markdown content (str). Returns (None, None) on failure.
    """
    try:
        # Make a request to the URL using the provided session
        # Using a header to mimic a browser can help avoid blocking
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = session.get(url, headers=headers, timeout=15)
        # Raise an exception for bad status codes (4xx or 5xx)
        response.raise_for_status()

        # Parse the HTML content of the page
        soup = BeautifulSoup(response.text, 'html.parser')

        # --- Content Extraction ---
        # Find the main content area of the page.
        # For developers.google.com, the primary article content is
        # typically within a 'div' with the class 'devsite-article-body'.
        # This selector is crucial and may need to be adjusted if the site structure changes.
        article_body = soup.find('div', class_='devsite-article-body')

        if not article_body:
            print(f"Warning: Main article body not found for {url}")
            return None, None

        # --- Element Stripping ---
        # Remove unwanted elements like navigation, sidebars, scripts, etc.,
        # before converting to Markdown to ensure a clean output.
        elements_to_remove = [
            'nav', 'header', 'footer', 'aside', 'script', 'style',
            '.devsite-article-meta', '.devsite-feedback', '.nocontent'
        ]
        for selector in elements_to_remove:
            for element in article_body.select(selector):
                element.decompose()

        # Extract the page title for use as a header in the Markdown file
        page_title = soup.title.string.split('|')[0].strip() if soup.title else "Untitled"

        # --- HTML to Markdown Conversion ---
        # Convert the cleaned HTML to Markdown.
        # Options used:
        # - heading_style="ATX": Uses '#' for headers (e.g., # H1, ## H2).
        # - strip=['a', 'img']: Removes all link (<a>) and image (<img>) tags,
        #   but keeps their text content. This is ideal for LLM processing.
        markdown_content = md(str(article_body), heading_style="ATX", strip=['a', 'img'])

        return page_title, markdown_content

    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None, None

def main():
    """
    Main function to orchestrate the scraping and file creation process.
    """
    # List of URLs to scrape, taken from the provided document.
    # This list can be modified or loaded from an external file.
    urls = [
        "https://developers.google.com/search/docs",
        "https://developers.google.com/search/docs/essentials",
        "https://developers.google.com/search/docs/essentials/technical",
        "https://developers.google.com/search/docs/essentials/spam-policies",
        "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
        "https://developers.google.com/search/docs/fundamentals/how-search-works",
        "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
        "https://developers.google.com/search/docs/fundamentals/do-i-need-seo",
        "https://developers.google.com/search/docs/fundamentals/get-started",
        "https://developers.google.com/search/docs/fundamentals/get-started-developers",
        "https://developers.google.com/search/docs/fundamentals/get-on-google",
        "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
        "https://developers.google.com/search/docs/crawling-indexing",
        "https://developers.google.com/search/docs/crawling-indexing/indexable-file-types",
        "https://developers.google.com/search/docs/crawling-indexing/url-structure",
        "https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions",
        "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl",
        "https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation",
        "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget",
        "https://developers.google.com/search/docs/crawling-indexing/http-network-errors",
        "https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers",
        "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers",
        "https://developers.google.com/search/docs/crawling-indexing/google-special-case-crawlers",
        "https://developers.google.com/search/docs/crawling-indexing/google-user-triggered-fetchers",
        "https://developers.google.com/search/docs/crawling-indexing/googlebot",
        "https://developers.google.com/search/docs/crawling-indexing/read-aloud-user-agent",
        "https://developers.google.com/search/docs/crawling-indexing/apis-user-agent",
        "https://developers.google.com/search/docs/crawling-indexing/feedfetcher",
        "https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate",
        "https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot",
        "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
        "https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt",
        "https://developers.google.com/search/docs/crawling-indexing/robots/submit-updated-robots-txt",
        "https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt",
        "https://developers.google.com/search/docs/crawling-indexing/canonicalization",
        "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
        "https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting",
        "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
        "https://developers.google.com/search/docs/crawling-indexing/amp",
        "https://developers.google.com/search/docs/crawling-indexing/amp/about-amp",
        "https://developers.google.com/search/docs/crawling-indexing/amp/enhance-amp",
        "https://developers.google.com/search/docs/crawling-indexing/amp/validate-amp",
        "https://developers.google.com/search/docs/crawling-indexing/amp/remove-amp",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering",
        "https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata",
        "https://developers.google.com/search/docs/crawling-indexing/special-tags",
        "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag",
        "https://developers.google.com/search/docs/crawling-indexing/block-indexing",
        "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links",
        "https://developers.google.com/search/docs/crawling-indexing/control-what-you-share",
        "https://developers.google.com/search/docs/crawling-indexing/remove-information",
        "https://developers.google.com/search/docs/crawling-indexing/prevent-images-on-your-page",
        "https://developers.google.com/search/docs/crawling-indexing/keep-redacted-information-out",
        "https://developers.google.com/search/docs/crawling-indexing/301-redirects",
        "https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes",
        "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
        "https://developers.google.com/search/docs/crawling-indexing/website-testing",
        "https://developers.google.com/search/docs/crawling-indexing/pause-online-business",
        "https://developers.google.com/search/docs/appearance",
        "https://developers.google.com/search/docs/appearance/ai-features",
        "https://developers.google.com/search/docs/appearance/publication-dates",
        "https://developers.google.com/search/docs/appearance/favicon-in-search",
        "https://developers.google.com/search/docs/appearance/featured-snippets",
        "https://developers.google.com/search/docs/appearance/flexible-sampling",
        "https://developers.google.com/search/docs/appearance/google-discover",
        "https://developers.google.com/search/docs/appearance/google-images",
        "https://developers.google.com/search/docs/appearance/establish-business-details",
        "https://developers.google.com/search/docs/appearance/top-places-list",
        "https://developers.google.com/search/docs/appearance/page-experience",
        "https://developers.google.com/search/docs/appearance/core-web-vitals",
        "https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials",
        "https://developers.google.com/search/docs/appearance/signed-exchange",
        "https://developers.google.com/search/docs/appearance/ranking-systems-guide",
        "https://developers.google.com/search/docs/appearance/reviews-system",
        "https://developers.google.com/search/docs/appearance/site-names",
        "https://developers.google.com/search/docs/appearance/sitelinks",
        "https://developers.google.com/search/docs/appearance/snippet",
        "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
        "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
        "https://developers.google.com/search/docs/appearance/enriched-search-results",
        "https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript",
        "https://developers.google.com/search/docs/appearance/structured-data/search-gallery",
        "https://developers.google.com/search/docs/appearance/structured-data/article",
        "https://developers.google.com/search/docs/appearance/structured-data/book",
        "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb",
        "https://developers.google.com/search/docs/appearance/structured-data/carousel",
        "https://developers.google.com/search/docs/appearance/structured-data/course-info",
        "https://developers.google.com/search/docs/appearance/structured-data/course",
        "https://developers.google.com/search/docs/appearance/structured-data/dataset",
        "https://developers.google.com/search/docs/appearance/structured-data/discussion-forum",
        "https://developers.google.com/search/docs/appearance/structured-data/education-qa",
        "https://developers.google.com/search/docs/appearance/structured-data/employer-rating",
        "https://developers.google.com/search/docs/appearance/structured-data/estimated-salary",
        "https://developers.google.com/search/docs/appearance/structured-data/event",
        "https://developers.google.com/search/docs/appearance/structured-data/factcheck",
        "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
        "https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata",
        "https://developers.google.com/search/docs/appearance/structured-data/job-posting",
        "https://developers.google.com/search/docs/appearance/structured-data/learning-video",
        "https://developers.google.com/search/docs/appearance/structured-data/local-business",
        "https://developers.google.com/search/docs/appearance/structured-data/math-solvers",
        "https://developers.google.com/search/docs/appearance/structured-data/movie",
        "https://developers.google.com/search/docs/appearance/structured-data/organization",
        "https://developers.google.com/search/docs/appearance/structured-data/practice-problems",
        "https://developers.google.com/search/docs/appearance/structured-data/product",
        "https://developers.google.com/search/docs/appearance/structured-data/product-snippet",
        "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing",
        "https://developers.google.com/search/docs/appearance/structured-data/product-variants",
        "https://developers.google.com/search/docs/appearance/structured-data/loyalty-program",
        "https://developers.google.com/search/docs/appearance/structured-data/return-policy",
        "https://developers.google.com/search/docs/appearance/structured-data/profile-page",
        "https://developers.google.com/search/docs/appearance/structured-data/qapage",
        "https://developers.google.com/search/docs/appearance/structured-data/recipe",
        "https://developers.google.com/search/docs/appearance/structured-data/review-snippet",
        "https://developers.google.com/search/docs/appearance/structured-data/software-app",
        "https://developers.google.com/search/docs/appearance/structured-data/speakable",
        "https://developers.google.com/search/docs/appearance/structured-data/special-announcements",
        "https://developers.google.com/search/docs/appearance/structured-data/paywalled-content",
        "https://developers.google.com/search/docs/appearance/structured-data/vacation-rental",
        "https://developers.google.com/search/docs/appearance/structured-data/vehicle-listing",
        "https://developers.google.com/search/docs/appearance/structured-data/video",
        "https://developers.google.com/search/docs/appearance/title-link",
        "https://developers.google.com/search/docs/appearance/translated-results",
        "https://developers.google.com/search/docs/appearance/ad-network-and-translation",
        "https://developers.google.com/search/docs/appearance/video",
        "https://developers.google.com/search/docs/appearance/visual-elements-gallery",
        "https://developers.google.com/search/docs/appearance/enable-web-stories",
        "https://developers.google.com/search/docs/appearance/web-stories-creation-best-practices",
        "https://developers.google.com/search/docs/appearance/web-stories-content-policy",
        "https://developers.google.com/search/docs/appearance/package-tracking",
        "https://developers.google.com/search/docs/appearance/structured-data/carousels-beta",
        "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops",
        "https://developers.google.com/search/docs/monitor-debug/search-console-start",
        "https://developers.google.com/search/docs/monitor-debug/bubble-chart-analysis",
        "https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console",
        "https://developers.google.com/search/docs/monitor-debug/search-operators",
        "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site",
        "https://developers.google.com/search/docs/monitor-debug/search-operators/image-search",
        "https://developers.google.com/search/docs/monitor-debug/security",
        "https://developers.google.com/search/docs/monitor-debug/prevent-abuse",
        "https://developers.google.com/search/docs/monitor-debug/security/malware",
        "https://developers.google.com/search/docs/monitor-debug/security/prevent-malware",
        "https://developers.google.com/search/docs/monitor-debug/security/social-engineering",
        "https://developers.google.com/search/docs/monitor-debug/security/safe-browsing-repeat-offenders",
        "https://developers.google.com/search/docs/monitor-debug/trends-start",
        "https://developers.google.com/search/docs/specialty/ecommerce",
        "https://developers.google.com/search/docs/specialty/ecommerce/where-ecommerce-data-can-appear-on-google",
        "https://developers.google.com/search/docs/specialty/ecommerce/share-your-product-data-with-google",
        "https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce",
        "https://developers.google.com/search/docs/specialty/ecommerce/how-to-launch-an-ecommerce-website",
        "https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews",
        "https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites",
        "https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure",
        "https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading",
        "https://developers.google.com/search/docs/specialty/international",
        "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites",
        "https://developers.google.com/search/docs/specialty/international/localized-versions",
        "https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages",
        "https://developers.google.com/search/docs/specialty/explicit/guidelines",
        "https://developers.google.com/search/docs/specialty/explicit/troubleshooting"
    ]

    # Use a session object to reuse the underlying TCP connection
    session = requests.Session()
    all_markdown_content = []
    total_urls = len(urls)

    # Process each URL
    for i, url in enumerate(urls):
        print(f"Processing URL {i+1}/{total_urls}: {url}")
        title, content = scrape_and_convert_url(url, session)

        if title and content:
            # Add metadata and structure for each page's content
            formatted_content = f"# {title}\n\n"
            formatted_content += f"<!-- Original URL: {url} -->\n\n"
            formatted_content += content
            all_markdown_content.append(formatted_content)

        # Be a good web citizen: pause between requests to avoid overwhelming the server
        time.sleep(1)

    # Concatenate all the markdown content with a separator
    final_output = "\n\n---\n\n".join(all_markdown_content)

    # Define the output file name
    output_filename = "google_search_docs_compiled.md"

    # Write the final concatenated content to a Markdown file
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(final_output)
        print(f"\nSuccessfully compiled documentation into '{output_filename}'")
        print(f"File saved in: {os.path.abspath(output_filename)}")
    except IOError as e:
        print(f"\nError writing to file: {e}")


if __name__ == "__main__":
    main()

