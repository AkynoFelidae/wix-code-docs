# What's New

We're always adding and updating the Corvid APIs, and we want you to have one place to find all of our latest changes and cool additions.

## 🗓️ October 13, 2020
### Update: Add Information That wix-location > to Does Not Work in Preview

`wix-location`

Added a note that [wixLocation.to](https://www.wix.com/corvid/reference/wix-location/to) only works on a published site and not while previewing.

## 🗓️ September 15, 2020
### Bug: Change Slider > value from read only to read & write

`$w.slider` 

The [`value`](https://www.wix.com/corvid/reference/$w/slider/value) property for the Slider element was described as read only but it should have been read and write.

## 🗓️ September 15, 2020
### Update: More Information for Return Object Properties from Validity Property

`ValidatableMixin`

Added more content to the table that displays details of the object returned by [`validity`](https://www.wix.com/corvid/reference/$w/validatablemixin/validity).

## 🗓️ September 14, 2020
### Fix: Add Information That Some getProductVariants Parameter Fields Are Optional

`wix-stores`

Added information that some of the parameter fields for [getProductVariants](https://www.wix.com/corvid/reference/wix-stores/getproductvariants) are optional.

## 🗓️ September 14, 2020
### Fix: createProduct SKU is a string

`stores-backend`

The `sku` property for [createProduct](https://www.wix.com/corvid/reference/wix-stores-backend/createproduct) was described as a number, but it is a string.

## 🗓️ September 10, 2020
### Update: Add information about getFileURL token expiring

`wix-media-backend`

Added information that the token returned by [`getFileUrl()`](https://www.wix.com/corvid/reference/wix-media-backend/mediamanager-obj/getfileurl) expires after 600 minutes. Describe the alternative of creating a static URL without a token.

## 🗓️ September 10, 2020
### Fix: The URL table for wixHttpFunctionRequest

`wix-http-functions`

The table that described the URL structure of a [wixHttpFunctionRequest](https://www.wix.com/corvid/reference/wix-http-functions/wixhttpfunctionrequest) was difficult to parse. We've updated the content to make it easier to understand. 

## 🗓️ September 7, 2020
### New API: On Cart Changed Event

`wix-stores`

With the new [`onCartChanged()`](https://www.wix.com/corvid/reference/wix-stores/oncartchanged) client-side event in wix-stores, you can access information about the site's shopping cart every time an item is added or removed. Useful for creating a promotional lightbox - if product X is added to the cart, offer product Y.

## 🗓️ September 7, 2020
### New API: Consent Policy (Privacy Laws)

`wix-users`

To help your site conform to GDPR and CCPA standards, we now provide Corvid APIs for [checking](https://www.wix.com/corvid/reference/wix-users/getcurrentconsentpolicy) and [setting](https://www.wix.com/corvid/reference/wix-users/setconsentpolicy) visitors' current consent policies. These policies include which cookies the visitor allows and if the visitor allows data transfer to third parties. 

## 🗓️ August 30, 2020
### Update: Added examples to listMemberBadges

`wix-users-backend`

Added more robust examples to [`listMemberBadges()`](https://www.wix.com/corvid/reference/wix-users-backend/badges-obj/listmemberbadges) for how to handle the results.


## 🗓️ August 23, 2020
### New API: Coupons limit per customer

?????

## 🗓️ August 20, 2020
### New API: Custom Fulfiller Email 

`wix-stores-backend`

Use the new [`sendFulfillmentEmail()`](https://www.wix.com/corvid/reference/wix-stores-backend/sendfulfillmentemail) function to send an email containing fulfillment details (products to ship, shipping details, etc.) to a custom fulfiller (a fulfiller not integrated with Wix, like ShipBob or ShipStation). 

## 🗓️ August 20, 2020
### New API: Order Paid Event 

`wix-stores-backend`

Added a new [event](https://www.wix.com/corvid/reference/wix-stores-backend/events/onorderpaid) that fires when an order is marked as paid.

## 🗓️ August 12, 2020
### Update: New Array and Object data types

`wix-data`

Added information about new array and object types to the [wix-data Introduction](https://www.wix.com/corvid/reference/wix-data/introduction).

## 🗓️ August 11, 2020
### New API: Print Packing Slip

`wix-stores-backend`

Use the new [`getPackingSlipLink()`](https://www.wix.com/corvid/reference/wix-stores-backend/getpackingsliplink) function to generate and print a PDF file of an order's packing slip. Especially useful in the ThankYouPage, after an order is completed.

## 🗓️ August 3, 2020
### Update: New example for wixDataQuery.include

`wix-data`

Added new example in [`wixData.query.include()`](https://www.wix.com/corvid/reference/wix-data/wixdataquery/include), to show how to use a reference field from another collection when populating a table with DataPath.

## 🗓️ July 9, 2020
### Update: Add information about import and export triggering before and after query hooks 

`wix-data`

Added information that [before](https://www.wix.com/corvid/reference/wix-data/hooks/beforequery) and [after](https://www.wix.com/corvid/reference/wix-data/hooks/afterquery) query hooks are triggered when items are exported from a collection.