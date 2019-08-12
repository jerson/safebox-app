package dev.jerson.safebox.watch

import android.os.Bundle
import android.support.wearable.activity.WearableActivity

class AccountActivity : WearableActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_account)

        setAmbientEnabled()
    }
}
