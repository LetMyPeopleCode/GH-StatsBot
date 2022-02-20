# GH-StatsBot
A set of scripts for building better analytics for your GitHub repositories.

## Why a StatsBot?
You can get some interesting stats from a repository's `Insights` tab, and if you have push permissions, you can get some overall traffic info for the last two weeks. You cannot get long term data to compare stuff like MOM or YOY data and you cannot go very deep.

If you use the Github API, you can go a little deeper, but you're still limited to 2 weeks of data and information just on the top 10 pages.

If you have a single repo that contains multiple code samples or demos, not only do your customers have to download the whole repo for just one, but the download information you get is just for when customers downloaded the whole repo.

## So what does GH-StatsBot do?

GH-StatsBot has five different modules that can be used individually or together:

1. **GitHub traffic collector**: A bot that you can set up with a CRON job on your own system or in an AWS Lambda to pull and store stats on your repo(s) daily.
2. **GitHub README tracker**: A bot that collects and stores anonymized stats* on which README pages were viewed and when.
3. **GitHub micro-cloner**: A service which lets you place download links in README files to just download that directory (and its subdirectories) and record data about the downloads.
4. **GitHub stats reporter**: A reporting service which can ingest and provide insights on the data collected by the other three modules.
5. **GitHub stats store**: A set of extensible interfaces and/or webhooks to help record and make available the data you are collecting.

\* Anonymized stats are because Github uses an anonymizing service called `camo` for all external images. All the data will be for a single user, the service, but it can still be very useful.

## What about privacy?
As mentioned above, Github anonymizes external image URLs using a service called `camo`. I'm not a laywer, but it seems the traffic collector and README tracker are basically covered by GitHub's privacy policy. 

You may need to provide a privacy statement for the micro-cloning as you not only can collect data through your own analytics, but it can substitute other analytics services like Google or Adobe.

## Strategies

You need to at least use one of the first three modules along with the `stats store` module to store/pass the data.

Maybe you were smart and didn't create any multi-sample/demo repositories, you just have the one README, your own BI tool, and you simply want simple stats collection over a longer period than 2 weeks. You would use the `traffic collector` and a `stats store` extension to collect the data and pass it to your BI system.



