<?php

/*
* Script to pull data from instagram, a quick & dirty workaround for API restrictions.
* It fetches the user's images, extract properies, and write the results to a JSON file.
*
* DEPENDENCIES: php script from https://github.com/postaddictme/instagram-php-scraper.
* Follow installation instructions on the repo.
*
*/

require __DIR__."/../../instagram-php-scraper/vendor/autoload.php";
use InstagramScraper\Instagram;
$instagram = new Instagram();

$username = "tabi.twitchett";
$data_dir = __DIR__ . '/../src/_data/';
$output_file = $data_dir . "instadump.json";
$gallery_list = [];

$max_id = NULL;
$fetch_count = 1;
do {
  echo "fetching page {$fetch_count}...\n";

  // get the data
  $api_response = $instagram->getPaginateMedias($username, $max_id);
  $has_next_page = $api_response['hasNextPage'];
  $medias = $api_response['medias'];
  $max_id = $api_response['maxId'];

  // extract to array
  foreach($medias as $media_item) {
    array_push($gallery_list, createImageObject($media_item));
  }

  $fetch_count += 1;
} while($has_next_page === true);

// persist
$success = write_json($output_file, $gallery_list);

if ($success) {
  echo "instagram scraper wrote " .  count($gallery_list) . " items to " . $output_file . "\n";
} else {
  echo "error with instagram scrape\n";
}

// convert API response item to php object, with only the props we need
function createImageObject($media) {
  return (object) array(
    'id' => $media->getId(),
    'thumbnailUrl' => $media->getSquareImages()[0],
    'highResolutionUrl' => $media->getImageHighResolutionUrl(),
    'instagramUrl' => $media->getLink(),
    'caption' => $media->getCaption()
  );
}

// write the image data to a local file
function write_json($filename, $data) {
  return file_put_contents($filename, json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
}

?>