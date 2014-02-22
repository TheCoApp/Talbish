package com.talbish.android;
import com.talbish.android.R;

import android.os.Bundle;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.webkit.WebView;

@SuppressLint("SetJavaScriptEnabled")
public class MainActivity extends Activity {
	 WebView browser;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        browser=(WebView)findViewById(R.id.webkit);     
        browser.getSettings().setJavaScriptEnabled(true);
        browser.getSettings().setDefaultFontSize(20);
        browser.loadUrl("http://eliadmedia.com/mbs/");        
    }
    @Override
    // Detect when the back button is pressed
    public void onBackPressed() {
        if(browser.canGoBack()) {
            browser.goBack();
        } else {
            // Let the system handle the back button
            super.onBackPressed();
        }
    }
 // Stop local links and redirects from opening in browser instead of WebView
  //  browser.setWebViewClient(new MyAppWebViewClient());
}
