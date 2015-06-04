# Alloy *Time Ago* widget [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)

This widget allows you to determine and display the "ago" time.

## Features
* Calculate the "ago" time
* Localization support

## Quick Start

Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/platform/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install it.toriphes.timeago`

### Use it

* In alloy add the widget to your View

	```xml
    <Alloy>
        <Window class="container">
            <Widget id="ta" src="it.toriphes.timeago" date="2012-10-08" />
        </Window>
    </Alloy>
	```
* or in the controller

	```javascript
    var ta = Alloy.createWidget("it.toriphes.timeago");
    ta.inWords("2012-10-08");
    ```
    
## Localize

Localization file are in `$project_root/app/widgets/it.toriphes.timeago/i18n`

If a localization is not present within the widget you can write it and send a pull request or implement the translated strings in your localization file

## Options
All the options are passed to the label object. Special option

| Parameter   | Type | Default |
| ---------- | ---------- | ----- |
| date | `string`\|`object`\|`array`\|`Date`\|`Moment` | undefined

## Methods

| Function   | Parameters | Usage |
| ---------- | ---------- | ----- |
| inWords | `string`\|`object`\|`array`\|`Date`\|`Moment` | Returns the timeago string