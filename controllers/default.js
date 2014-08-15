exports.install = function (framework)
{
        framework.route('/', homepage);
};


function homepage ()
{
    var self = this;
    self.view('homepage');
}
