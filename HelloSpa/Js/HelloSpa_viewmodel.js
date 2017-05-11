$(function(){
	ko.applyBindings(new helloSpaViewModel());
	
	//jquery stuff
	toggleFullName();
	
});

toggleFullName = function(){ 
	$("#txtFirstName, #txtLastName").keyup(function(){
		if($("#txtFirstName").val().length === 0 || $("#txtLastName").val().length === 0){
			$("#fullName1").hide("slow");
		}else
		$("#fullName1").show("slow");		
	});
}

helloSpaViewModel = function(){
	this.firstName = ko.observable("John");
	this.lastName = ko.observable("Doe");
	this.fullName = ko.computed(function(){
		return this.firstName() + " " + this.lastName();
	}, this);
	
	this.capitalizeLastName = function(){
		var currentVal = this.lastName();
		this.lastName(currentVal.toUpperCase());
	}
}
