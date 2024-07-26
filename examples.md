---
layout: archive
title: Examples
date: 2019-01-23 21:34:40 +0000
modified: 2019-01-23 21:34:40 +0000
excerpt: A selection of projects using TwoTone and open data.
tags: []
image:
  feature: 
  teaser: 

---
<h3>A selection of projects made with TwoTone</h3>  
<div style='display: flex; flex-wrap: wrap; justify-content: space-between;'>

<div class="tiles">
{% for post in site.categories.examples %}
{% if post.featured %}
{% include post-grid.html %}
{% endif %}
{% endfor %}
</div>
</div>
<!-- /.tiles -->

<hr>
<div class="list">  
{% for post in site.categories.examples %}  
{% unless post.featured %}  
{% include post-list.html %}  
{% endunless %}  
{% endfor %}  
</div>