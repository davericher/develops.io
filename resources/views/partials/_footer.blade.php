<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12" data-ng-controller="socialController as social">
                <div id="soc">
                    <p>
                        David J Richer
                    </p>
                    <a data-ng-repeat="link in social.links" target="_blank" href="@{{link.href}}"
                       class="btn btn-sm btn-social-icon @{{link.btnStyle}}">
                        <i class="fa @{{link.faStyle}} "></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>