var ResizeImg = function(_imgUrl, _width, _height) {
    var EMPTY_IMG = 'http://ocdn.eu/static/template-engine/MWQ7MDA_/f91027a81897ab2baedec014d2d7675a/0.gif';
    var OCN = 'J&D87ftasd67SFD%&^asdf';
    
    this.transPrefix = '06';
    this._imgUrl = _imgUrl;
	this._width = _width;
	this._height = _height;
    
    /**
     * This method gets correct url to img
     */
    this.getUrl = function() {
        var checksum, buff, base, dir, transStr, name;
        
        try {
            name = this.getImgName();
            
            transStr = this.getTransStr();
            checksum = CryptoJS.MD5(name + transStr + OCN);
            buff = new StrBuf(checksum.toString().substr(0,2) + ';' + transStr);
            base = Base64.encode(buff.toString());
            dir = base.replace(/=/g, '_');
            
            return this._imgUrl.replace(this.getImgDir(), dir);
        } catch (e) {
            return EMPTY_IMG;
        }
    }
    
    /**
     * This metohod gets image name from path
     */
    this.getImgName = function() {
        return this._imgUrl.split('/').pop().replace('.jpg', '');   
    }
    
    /**
     * This method gets dir from path
     */
    this.getImgDir = function() {
        var arr = this._imgUrl.split('/')
        return arr[arr.length - 2]
    }
    
    this.getTransStr = function() {
        return this.transPrefix + ',' + this._width + ',' + this._height;
    }
}