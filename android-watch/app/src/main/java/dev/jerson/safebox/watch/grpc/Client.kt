package dev.jerson.safebox.watch.grpc

import safebox.SafeBox
import safebox.Safebox

object Client {

    private val instance = Safebox.newSafeBox("safebox.jerson.dev:50051")

    internal fun connect(): SafeBox {
        return instance
    }
}
