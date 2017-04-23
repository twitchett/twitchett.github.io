---
layout: page
title: Scrawls and Photos
permalink: /visual/
pagetype: visual
---

A gallery of my <a href="https://www.instagram.com/{{ site.author.instagram_username }}" target="_blank">instagram stream</a>.

<script type="text/javascript">
	// i give up, just use a global var.
	// the problem is that the comments contain a bunch of special chars
	// that need to be escaped, makes it difficult to set this as a data attribute
	window.twitchett = {
		instadump: {{ site.data.instadump | jsonify }}
	}
</script>

<div id="reactApp"
	data-config='{% collect_react_cfg %}'
/>
