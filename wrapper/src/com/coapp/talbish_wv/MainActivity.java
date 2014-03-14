package com.coapp.talbish_wv;

import android.os.Bundle;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.widget.Toast;

@SuppressLint("SetJavaScriptEnabled")
public class MainActivity extends Activity {
	 WebView browser;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        browser=(WebView)findViewById(R.id.webkit);     
        browser.getSettings().setJavaScriptEnabled(true);
        browser.getSettings().setGeolocationEnabled(true);
        getlocation loc = new getlocation();
        browser.addJavascriptInterface(loc, "locationProvider"); 
        browser.loadUrl("http://eliadmedia.com/mbs/");     
       }
    
    private static long back_pressed;

    public String location; //as an example

    public class getlocation {
        public String getLocation(){
            return location;
        }
    }
    
    
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        // Check if the key event was the Back button and if there's history
        if ((keyCode == KeyEvent.KEYCODE_BACK) && browser.canGoBack()) {
            browser.goBack();
            return true; }
            else 
        // If it wasn't the Back key or there's no web page history, bubble up to the default
        // system behavior (probably exit the activity)
        // return super.onKeyDown(keyCode, event);
        if (back_pressed + 1500 > System.currentTimeMillis()) super.onBackPressed();
        else Toast.makeText(getBaseContext(), " אין לך אומץ ללחוץ שוב  \n  רואה? אין לך \n אין", Toast.LENGTH_SHORT).show();
        back_pressed = System.currentTimeMillis();
        //return super.onKeyDown(keyCode, event);
		return false;
            
    }
     
    public boolean shouldOverrideUrlLoading(WebView view, String url){
      view.loadUrl(url);
      return true;    
    }
    
 }