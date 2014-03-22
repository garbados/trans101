# [Trans101][]

[![Build Status](https://travis-ci.org/garbados/trans101.svg?branch=master)](https://travis-ci.org/garbados/trans101)

A primer of trans* resources, for allies, journalists, parents, anyone questioning their gender, and of course, trans* people!

Built with love, and inspired by [f*ckinghomepage](http://fuckinghomepage.com).

## Resources

Resources are stored in the `docs` folder in [yaml][], like this:

    - 
      title: Just came out?
      id: just-out
      resources:
        -
          link: http://transclothesswap.com
          title: Trans Clothes Swap
          description: >
            A blog for trans* folks to ask for clothes, 
            and other trans* people or cis allies to donate clothes.
        -
          link: http://refugerestrooms.org
          title: Refuge Restrooms
          description: Find nearby gender-neutral restrooms.

To add more resources, just modify the yaml doc named for your language, ex: `docs/en.yml` for English, and submit your change as a pull request. Once the request has been merged, [Travis][] will then update the site automatically.

## Info Cards

**Coming Soon**

As a trans* person, you might find yourself having the same conversations over and over and over with potential allies:

* Will you keep your genitals?
* Why are you trans*?
* You can't use that as a pronoun!

For these circumstances, I've printed out info cards linking to [Trans101][], so I can:

1. State a boundary, ex: "That's not an appropriate question.", "Please use my pronouns."
2. Hand them the info card, "If you want to learn why, go here."
3. Get on with our lives :D

To get info cards, you can:

* [Print them yourself][infocard_pdf]
* [Order some from Staples][order_form]

If you identify as trans* and neither option works for you for whatever reason, [email me][email], and I'll mail you some :)

[Donations appreciated :D][gittip]

## Development

To build Trans101 locally, for testing or otherwise, You'll need Node.js, Bower, and Grunt installed. Once you have those, do this:

    git clone git@github.com:garbados/trans101.git
    cd trans101
    npm install && bower install
    grunt serve

Then visit <http://localhost:8000> and you should see Trans101!

While the `grunt serve` task is still running, any changes you make will cause the site to rebuild, so <http://localhost:8000> will always reflect your latest changes.

## License

[ISC][], yo.

[yaml]: http://yaml.org
[Travis]: https://travis-ci.org/garbados/trans101
[Trans101]: http://trans101.maxthayer.org/
[email]: mailto:garbados@gmail.com
[gittip]: https://www.gittip.com/garbados/
[ISC]: http://opensource.org/licenses/ISC
[infocard_pdf]: 
[order_form]: 