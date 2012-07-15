package net.neilgoodman.android.photomapper;

import org.apache.cordova.*;

import android.os.Bundle;

public class PhotoMapperActivity extends DroidGap {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}