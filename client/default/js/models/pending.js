PendingModel = FormModel.extend({
  idAttribute: 'id',
  sync: FHBackboneDataSyncFn
});

PendingWaitingCollection = Backbone.Collection.extend({
  model: PendingModel,
  store: new FHBackboneDataSync("pending-waiting"),
  sync: FHBackboneDataSyncFn,
  create: function(attributes, options) {
    attributes.savedAt = new Date().getTime();
    return Backbone.Collection.prototype.create.call(this, attributes, options);
  }
});

PendingSubmittingCollection = Backbone.Collection.extend({
  model: PendingModel,
  store: new FHBackboneDataSync("pending-submitting"),
  sync: FHBackboneDataSyncFn,
  create: function(attributes, options) {
    attributes.savedAt = new Date().getTime();
    var model = Backbone.Collection.prototype.create.call(this, attributes, options);
    return model;
  }
});

PendingSubmittedCollection = Backbone.Collection.extend({
  model: PendingModel,
  store: new FHBackboneDataSync("pending-submitted"),
  sync: FHBackboneDataSyncFn,
  create: function(attributes, options) {
    attributes.submittedAt = new Date().getTime();
    return Backbone.Collection.prototype.create.call(this, attributes, options);
  }
});

PendingReviewCollection = Backbone.Collection.extend({
  model: PendingModel,
  store: new FHBackboneDataSync("pending-review"),
  sync: FHBackboneDataSyncFn,
  create: function(attributes, options) {
    attributes.submittedAt = new Date().getTime();
    return Backbone.Collection.prototype.create.call(this, attributes, options);
  }
});

App.collections.pending_submitting = new PendingSubmittingCollection();
App.collections.pending_submitted = new PendingSubmittedCollection();
App.collections.pending_review = new PendingReviewCollection();
App.collections.pending_waiting = new PendingWaitingCollection();
