---
title: "My first impressions on Gatsby"
description: "A small post about my first impressions on using Gatsby."
date: "2023-06-02"
banner:
  src: "../../images/gatsbyjspost.png"
  alt: "First Markdown Post"
  caption: 'Photo by <u><a href="https://blog.eduonix.com/author/rony/">Krishnakumar</a></u>'
categories:
  - "Impressions"
keywords:
  - "Impressions"
  - "Gatsby"
  - "Web Development"
  - "Blog"
---

## index.js

```js
import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Isaac Urman's Portfolio" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" 
        heading="Some Interests" />
      </Page>
    </>
  );
}

```

Using: `Gatsby`

I have used React before, and since Gatsby is based off of React, I am somewhat familiar in the use cases and applications Gatsby had. Just from first glance, it was very easy to install, import a pre-made formatted site, and begin editing away.

**First Impressions:** My first impressions using Gatsby vary depending on what you ask about. For ease of use, it is extremely easy to pick up, especially if you have past history in React. It does require decent knowledge of JS as a whole to really understand what is going on, especially if you want to develop more features for your static site. It definitely shines as a static site generator and even in writing this article I feel at ease knowing that each page will show accurately and quickly on any device. Overall, I am impressed with how versatile Gatsby is, and will continue to use it in the future for when I start to re-design this site from scratch.