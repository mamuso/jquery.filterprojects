# jquery.filterprojects

This is a jquery plugin that allows you filter a collection of elements visually by the intersection of 'tag groups'. Inspired by this <a href="http://www.newmediacampaigns.com/files/posts/filterable/filterable.html">filterable plugin</a>, but made after solve the projects section on <a href="http://the-cocktail.com/">the cocktail</a> website :)



## You need jquery :)

This plugin has been tested with jquery 1.3.x 


## How to bake a filter

- Get an element and tag all the children using the class attribute (class="eduaction 2010 new-challenges")
- Get one or more groups of links and use them as intersection groups

Then write:

 $("#the-element-wich-children-are-tagged").filterprojects({
   filterTagSelector: ['#group-of-links a', '#another-group-of-links a']
 });

And that's it!


## Ok, but I need more options

Yes, I know :) and you have a lot of options to customize it. Let's take a look:

<table border="0" cellspacing="0" cellpadding="0">
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animationSpeed</td>
      <td><span>Integer</span></td>
      <td>900</td>
      <td>Set up the speed of the effect. You can set this value to 0 to switch off the animation.</td>
    </tr>
    <tr>
      <td>animationPulse</td>
      <td><span>Integer</span></td>
      <td>100</td>
      <td>Is the time lapse between each element animation. If you set this value to 0 all the effects will start together.</td>
    </tr>
    <tr>
      <td>animationEase</td>
      <td><span>String</span></td>
      <td>"linear"</td>
      <td>You can set this element to "linear" or "swing", if you want to use more easing options take a look to the jquery animate section.</td>
    </tr>
    <tr>
      <td>activeClass</td>
      <td><span>String</span></td>
      <td>"active"</td>
      <td>Is the class that identify the active tags on a tag group.</td>
    </tr>
    <tr>
      <td>allTag</td>
      <td><span>String</span></td>
      <td>"all"</td>
      <td>Is the class that identify that you're selecting all the options of a tag group.</td>
    </tr>
    <tr>
      <td>randomize</td>
      <td><span>Boolean</span></td>
      <td>true</td>
      <td>Show or hide ordering randomly the elements of the collection.</td>
    </tr>
    <tr>
      <td>show</td>
      <td><span>Hash</span></td>
      <td>{ width: 'show', opacity: 'show' }</td>
      <td>Take a look to the jquery animate section to understand how to use that section.</td>
    </tr>
    <tr>
      <td>hide</td>
      <td><span>Hash</span></td>
      <td>{ width: 'hide', opacity: 'hide' }</td>
      <td>Take a look to the jquery animate section to understand how to use that section.</td>
    </tr>
    <tr>
      <td>filterTagSelector</td>
      <td><span>Array</span></td>
      <td>[]</td>
      <td>That's mandatory, you need to identify at least a tag group.</td>
    </tr>
  </tbody>
</table>


## There's something wrong with your plugin!

It's possible, noooooobody is perfect :) If you find problems with this plugin you can <a href="http://github.com/mamuso/jquery.filterprojects/issues">post an issue</a> here and I'll try to solve it as soon as possible.

I also accept that my english is not as good as it should be :) if you find any mistake in this text let me know!


## Download

If you don't remember where did you find this plugin remember that you can grab the latest version from <a href="https://github.com/mamuso/jquery.filterprojects/tree/master">github</a>. You can also download it <a href="http://github.com/mamuso/jquery.filterprojects/zipball/master">in a zip file</a>.
