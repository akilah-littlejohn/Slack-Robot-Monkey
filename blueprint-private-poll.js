module.exports = {
  start: [{"blueprint":"private-poll","type":"message","value":"start"}],
  dialog: {},
  ephemeral: {},
  message: {
    start: {
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Hello David! <fakeLink.toUser.com|Michael> wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
          {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Choose Farmhouse",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"select1"}]
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
          {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Choose Kin Khao",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"select2"}]
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
            "alt_text": "alt text for image"
          }
        },
          {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Choose Le Ros",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"select3"}]
            }
          ]
        },
        {
          "type": "divider"
        }
      ]
    }
  },
  thread: {},
  update: {
    edit: {
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Hello David! <fakeLink.toUser.com|Michael> wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Choose Farmhouse",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"select1"}]
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
          {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Choose Kin Khao",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"select2"}]
            }
          ]
        },
          {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
            "alt_text": "alt text for image"
          }
        },
          {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Choose Le Ros",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"select3"}]
            }
          ]
        },
        {
          "type": "divider"
        }
      ]
    },
    select1: {
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Hello David! <fakeLink.toUser.com|Michael> wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "plain_text",
              "text": ":white_check_mark: You selected this restaurant",
              "emoji": true
            }
          ]
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Edit selection",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"edit"}]
            }
          ]
        }
      ]
    },
    select2: {
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Hello David! <fakeLink.toUser.com|Michael> wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "plain_text",
                    "text": ":white_check_mark: You selected this restaurant",
                    "emoji": true
                }
            ]
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Edit selection",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"edit"}]
            }
          ]
        }
      ]
    },
    select3: {
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Hello David! <fakeLink.toUser.com|Michael> wants to know where you'd like to take the Paper Company investors to dinner tonight.\n\n *Please select a restaurant:*"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Farmhouse Thai Cuisine*\n:star::star::star::star: 1528 reviews\n They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c7ed05m9lC2EmA3Aruue7A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Kin Khao*\n:star::star::star::star: 1638 reviews\n The sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/korel-1YjNtFtJlMTaC26A/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Ler Ros*\n:star::star::star::star: 2082 reviews\n I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
            "alt_text": "alt text for image"
          }
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "plain_text",
              "text": ":white_check_mark: You selected this restaurant",
              "emoji": true
            }
          ]
        },
        {
          "type": "divider"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Edit selection",
                "emoji": true
              },
              "value": [{"blueprint":"private-poll","type":"update","value":"edit"}]
            }
          ]
        }
      ]
    }
  }
}