<?php

/*
* Script to pull data from instagram, a workaround for API restrictions
*
* Requirements: instagram-php-scraper https://github.com/postaddictme/instagram-php-scraper
*/

require __DIR__."/../../instagram-php-scraper/index.php";
use InstagramScraper\Instagram;

// config 

$username = "tabi.twitchett";
$output_dir = __DIR__.'/../src/_data/';
$output_file = "instadump.json";
$props_to_delete = array(
  "owner",
  "videoLowResolutionUrl",
  "videoStandardResolutionUrl",
  "videoLowBandwidthUrl",
  "videoViews"
);

$media_list = Instagram::getMedias($username, 200);

// prune unwanted properties

foreach($media_list as $media) {
  foreach ($media as $key => $value) {  
    if (in_array($key, $props_to_delete)) {
      unset($media->{$key});
    }
  }
}

// write to file

$success = file_put_contents($output_dir . $output_file, json_encode($media_list));

if ($success) {
  echo "instagram scraper wrote " .  count($media_list) . " items to " . $output_file;
} else {
  echo "error with instagram scrape";
}

?>