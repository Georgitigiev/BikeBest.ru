function toggleClasses(vertical){
   
   if(vertical === true){
        $(".mainField__wrapper__rightBlock--products").removeClass("productHorizontal");
        $(".infoProduct").removeClass("infoProductHorizontal");
        $(".imgProduct").removeClass("imgProductHorizontal");
        $(".mainField__wrapper__rightBlock--products .imgProduct img").removeClass("imgProductHorizontal__img");
        $(".mainField__wrapper__rightBlock--products .imgProduct__akcii").removeClass("imgProductHorizontal__akcii");
        $(".mainField__wrapper__rightBlock--products .imgProduct__podarok").removeClass("imgProductHorizontal__podarok");
        $(".mainField__wrapper__rightBlock--products .raitingProduct").removeClass("raitingsHorizontal");
        $(".nameProduct").removeClass("nameProductHorizontal");
        $(".nameProduct__miniDescription").removeClass("dispBlok");
        $(".priceButtonProduct").removeClass("dispBlokN");
        $(".attributeProduct").removeClass("attributeProductHorizontal");
        $(".attributeProduct__block").removeClass("attributeProductHorizontal__block");
        $(".bottomBlockProduct__variation__colors").removeClass("dispBlok");
        $(".bottomBlockProduct").removeClass("bottomBlockProductHorizontal");
        $(".bottomBlockProduct__featuresHorizontal").removeClass("dispBlok");
        $(".bottomBlockProduct__features").removeClass("dispBlokN");
        $(".rightBlockHorizontal").removeClass("dispBlok");
        $(".bottomRightHorizontal").removeClass("dispBlok");
        $(".mainField__wrapper__rightBlock--products .bottomBlockProduct__comparePrices").removeClass("dispBlokN");
        $(".bottomRightHorizontal__raitingProduct").removeClass("dispBlok");
   }
   else{
        $(".mainField__wrapper__rightBlock--products").addClass("productHorizontal");
        $(".infoProduct").addClass("infoProductHorizontal");
        $(".imgProduct").addClass("imgProductHorizontal");
        $(".mainField__wrapper__rightBlock--products .imgProduct img").addClass("imgProductHorizontal__img");
        $(".mainField__wrapper__rightBlock--products .imgProduct__akcii").addClass("imgProductHorizontal__akcii");
        $(".mainField__wrapper__rightBlock--products .imgProduct__podarok").addClass("imgProductHorizontal__podarok");
        $(".mainField__wrapper__rightBlock--products .raitingProduct").addClass("raitingsHorizontal");
        $(".nameProduct").addClass("nameProductHorizontal");
        $(".nameProduct__miniDescription").addClass("dispBlok");
        $(".priceButtonProduct").addClass("dispBlokN");
        $(".attributeProduct").addClass("attributeProductHorizontal");
        $(".attributeProduct__block").addClass("attributeProductHorizontal__block");
        $(".bottomBlockProduct__variation__colors").addClass("dispBlok");
        $(".bottomBlockProduct").addClass("bottomBlockProductHorizontal");
        $(".bottomBlockProduct__featuresHorizontal").addClass("dispBlok");
        $(".bottomBlockProduct__features").addClass("dispBlokN");
        $(".rightBlockHorizontal").addClass("dispBlok");
        $(".bottomRightHorizontal").addClass("dispBlok");
        $(".mainField__wrapper__rightBlock--products .bottomBlockProduct__comparePrices").addClass("dispBlokN");
        $(".bottomRightHorizontal__raitingProduct").addClass("dispBlok");
   }

}
