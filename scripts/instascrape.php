<?php

/*
* Script to pull data from instagram, a quick & dirty workaround for API restrictions.
*
* First: get thumbnail URLs. We keep these in a file and just append when there is a new image.
* Unfortunately can't get them any other way.
* This file is persisted and checked into git.
*
* Second: scrape data using the php scraper. See: https://github.com/postaddictme/instagram-php-scraper
*
* Finally, combine thumbnails with scraped data. The final json file is regenerated every time
* and is not under version control.
*
*/

require __DIR__."/../../instagram-php-scraper/index.php";
use InstagramScraper\Instagram;

// config 

$username = "tabi.twitchett";
$thumbnail_url = "https://www.instagram.com/" . $username . "/media";
$data_dir = __DIR__ . '/../src/_data/';
$output_file = $data_dir . "instadump.json";
$thumbnail_file = $data_dir . "instathumbs.json";
$props_to_delete = array(
  "owner",
  "videoLowResolutionUrl",
  "videoStandardResolutionUrl",
  "videoLowBandwidthUrl",
  "videoViews"
);

// ----- Step 1: get thumbnail urls ------

$thumb_urls = json_decode(file_get_contents($thumbnail_file), true);
$num_thumbs = count($thumb_urls);

// check for new thumbnails from instagram
$response = json_decode(file_get_contents($thumbnail_url), true);
foreach($response['items'] as $item) {
  $img_id = $item['id'];
  if (!array_key_exists($img_id, $thumb_urls)) {
    $thumb_url = $item['images']['thumbnail']['url'];
    $thumb_urls[$img_id] = $thumb_url;
  }
}

if ($num_thumbs < count($thumb_urls)) {
  $success = write_json($thumbnail_file, $thumb_urls);
  if (!$success) {
    throw new Exception ('Error writing thumbnail ' . print_r($success));
  }
}

// ----- Step 2: get the rest of the data ------

$media_list = Instagram::getMedias($username, 200);

foreach($media_list as $media) {
  // add the thumbnail url
  $thumb_url = $thumb_urls[$media->id];
  if (!$thumb_url) {
    throw new Exception('Could not find thumbnail url for img: ' . print_r($media, true));
  }
  $media->imageSquareThumbnailUrl = $thumb_url;
  // prune unwanted properties
  foreach ($media as $key => $value) {
    if (in_array($key, $props_to_delete)) {
      unset($media->{$key});
    }
    if ($key == 'caption') {
      echo $media->$key; // debug
    }
  }
}

// write to file
$success = write_json($output_file, $media_list);

if ($success) {
  echo "instagram scraper wrote " .  count($media_list) . " items to " . $output_file;
} else {
  echo "error with instagram scrape";
}


function write_json($filename, $data) {
  return file_put_contents($filename, json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
}

?>