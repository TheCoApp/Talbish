package com.talbish.android;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.webkit.WebView;

public class MyAppWebViewClient extends Activity {
    
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
              
        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
        view.getContext().startActivity(intent);
		return true;
       
    }
}