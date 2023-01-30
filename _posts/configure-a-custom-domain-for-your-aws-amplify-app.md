---
title: 'Configure a custom domain for your AWS Amplify App'
excerpt: 'A custom domain lets you share your AWS Amplify App with the world.  This tutorial will show you how to do just that.'
coverImage: '/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/tim-mossholder-eUyXxFrwVOE-unsplash.jpg'
coverImageAttribution: 'Photo by <a href="https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Mossholder</a> on <a href="https://unsplash.com/photos/eUyXxFrwVOE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
date: '2023-01-31T07:00:00.000Z'
ogImage:
  url: '/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/tim-mossholder-eUyXxFrwVOE-unsplash.jpg'
---

You've created an AWS Amplify App and you're ready to share it with the world.  You need a custom domain.  AWS Amplify and Route 53 make it easy and this guide will step you through it!

## Before you get started

You'll need a few things. You may already have some of them:

- [Setup an AWS Account](https://aws.amazon.com)
- Deployed [AWS Amplify](https://aws.amazon.com/amplify/) App
- [Custom domain name](https://domains.google)

This tutorial will use Google Domains as the example, but each domain provider has the same custom name server capability.  Simply run a search for your provider.

If you have been following along with my [tutorial to build a portfolio site](https://jacoborshalick.me/posts/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes), all you will need is your custom domain.  I would suggest your name (dot) me.  As an example, my custom domain name is:  [http://jacoborshalick.me](http://jacoborshalick.me)

If that's not available, consider adding your middle name or initial.

## Setup your custom domain in Route 53

Login to the AWS Console.  Once logged in search for __Route 53__ and open it.  When you get to the Route 53 Dashboard, select __Hosted Zones__ in the left column.

This will display any existing hosted zones, or none if you haven't created any yet.  Here you want to select the __Create hosted zone__ button.

![screenshot_1.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_1.png "Route 53 hosted zones")

Now enter your domain name and a description for your site.  Once you have entered this information, click __Create hosted zone__.

![screenshot_2.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_2.png "Create a hosted zone")

You will now see your domain name listed in the __Hosted zones__.  Click on your domain name.  Here you will see an __NS__ record.

![screenshot_3.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_3.png "Name server records")

These are the name servers for DNS routing.  Just copy the 4 name servers somewhere so you can use them when we configure your domain provider.

## Setup AWS Amplify with your custom domain

In the AWS Console, search for AWS Amplify and access it.  Here you will select your AWS Amplify App first.

Once selected, click on the __Domain Management__ in the left navigation panel.  In the __Domain Management__ interface, click the __Add Domain__ button on the upper left.

![screenshot_4.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_5.png "Add a custom domain")

Here you should see the domain you just configured in Route 53 when you select the dropdown.  Select it and click __Configure Domain__.

![screenshot_5.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_6.png "Configure your domain")

Uncheck "Setup redirect from..." and click the __Save__ button.

At this point, AWS Amplify will start to configure SSL for your site.  This will take some time.  Wait until the __Domain Activation__ step is complete before moving on to the next step.

![screenshot_6.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_7.png "AWS Amplify configuring the domain")

## Configure the Custom name servers on your domain provider

You now need to point your domain provider to the __Custom name servers__ you copied in the previous step.  You copied them somehwere right?  If not, you can always go back to Route 53 and find them.  For simplicity, I will use [Google Domains](https://domains.google.com) as the example here.

In Google Domains, you would select your custom domain.  Once selected, you would then select __DNS__ in the left navigation.

The __Default name servers__ will be configured to start with.  Select the __Custom name servers__ tab.

![screenshot_8.png](/assets/blog/configure-a-custom-domain-for-your-aws-amplify-app/screenshot_8.png "Using custom name servers in Google Domains")

You will see a warning that *Your domain isn't using these settings*.  Select __Switch to these settings__ and add all 4 custom name servers you copied into the __Name server__ input list.

__Note:__  Make sure there is not an extra period at the end of any of your name server hostnames.

Once you have copied them in, select __Save__.

## Access your AWS Amplify App through your custom domain

That's it!  You will now be able to access your AWS Amplify App from your custom domain name.

Be aware that while the DNS replication will likely happen very fast, it could take some time.  Give the replication at least a couple of hours before you assume it's not working.