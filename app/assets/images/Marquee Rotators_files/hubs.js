/*!
 * ASP.NET SignalR JavaScript Library v2.2.0
 * http://signalr.net/
 *
 * Copyright Microsoft Open Technologies, Inc. All rights reserved.
 * Licensed under the Apache 2.0
 * https://github.com/SignalR/SignalR/blob/master/LICENSE.md
 *
 */

/// <reference path="..\..\SignalR.Client.JS\Scripts\jquery-1.6.4.js" />
/// <reference path="jquery.signalR.js" />
(function ($, window, undefined) {
    /// <param name="$" type="jQuery" />
    "use strict";

    if (typeof ($.signalR) !== "function") {
        throw new Error("SignalR: SignalR is not loaded. Please ensure jquery.signalR-x.js is referenced before ~/signalr/js.");
    }

    var signalR = $.signalR;

    function makeProxyCallback(hub, callback) {
        return function () {
            // Call the client hub method
            callback.apply(hub, $.makeArray(arguments));
        };
    }

    function registerHubProxies(instance, shouldSubscribe) {
        var key, hub, memberKey, memberValue, subscriptionMethod;

        for (key in instance) {
            if (instance.hasOwnProperty(key)) {
                hub = instance[key];

                if (!(hub.hubName)) {
                    // Not a client hub
                    continue;
                }

                if (shouldSubscribe) {
                    // We want to subscribe to the hub events
                    subscriptionMethod = hub.on;
                } else {
                    // We want to unsubscribe from the hub events
                    subscriptionMethod = hub.off;
                }

                // Loop through all members on the hub and find client hub functions to subscribe/unsubscribe
                for (memberKey in hub.client) {
                    if (hub.client.hasOwnProperty(memberKey)) {
                        memberValue = hub.client[memberKey];

                        if (!$.isFunction(memberValue)) {
                            // Not a client hub function
                            continue;
                        }

                        subscriptionMethod.call(hub, memberKey, makeProxyCallback(hub, memberValue));
                    }
                }
            }
        }
    }

    $.hubConnection.prototype.createHubProxies = function () {
        var proxies = {};
        this.starting(function () {
            // Register the hub proxies as subscribed
            // (instance, shouldSubscribe)
            registerHubProxies(proxies, true);

            this._registerSubscribedHubs();
        }).disconnected(function () {
            // Unsubscribe all hub proxies when we "disconnect".  This is to ensure that we do not re-add functional call backs.
            // (instance, shouldSubscribe)
            registerHubProxies(proxies, false);
        });

        proxies['agentStatusHub'] = this.createHubProxy('agentStatusHub'); 
        proxies['agentStatusHub'].client = { };
        proxies['agentStatusHub'].server = {
            changeAfk: function (isAfk) {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["ChangeAfk"], $.makeArray(arguments)));
             },

            init: function () {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["Init"], $.makeArray(arguments)));
             },

            ping: function (input) {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["Ping"], $.makeArray(arguments)));
             },

            taskTreeSubscribe: function (keys) {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["TaskTreeSubscribe"], $.makeArray(arguments)));
             },

            taskTreeUnsubscribe: function (keys) {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["TaskTreeUnsubscribe"], $.makeArray(arguments)));
             },

            whosOnTreeSubscribe: function () {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["WhosOnTreeSubscribe"], $.makeArray(arguments)));
             },

            whosOnTreeUnsubscribe: function () {
                return proxies['agentStatusHub'].invoke.apply(proxies['agentStatusHub'], $.merge(["WhosOnTreeUnsubscribe"], $.makeArray(arguments)));
             }
        };

        proxies['alertHub'] = this.createHubProxy('alertHub'); 
        proxies['alertHub'].client = { };
        proxies['alertHub'].server = {
            ackPopoutNewChat: function (chatId) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["AckPopoutNewChat"], $.makeArray(arguments)));
             },

            activateIcons: function (icongroup) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["ActivateIcons"], $.makeArray(arguments)));
             },

            activateIconsAgent: function (icongroup) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["ActivateIconsAgent"], $.makeArray(arguments)));
             },

            deactivateIcons: function (icongroup) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["DeactivateIcons"], $.makeArray(arguments)));
             },

            deactivateIconsAgent: function (icongroup) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["DeactivateIconsAgent"], $.makeArray(arguments)));
             },

            joinLoginAlertRooms: function () {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["JoinLoginAlertRooms"], $.makeArray(arguments)));
             },

            liveChatStatus_SR: function (agentId, chatId, groupid, departmentId, chatStartTime, isTake) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["LiveChatStatus_SR"], $.makeArray(arguments)));
             },

            newChatAlertSR: function (alert) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["NewChatAlertSR"], $.makeArray(arguments)));
             },

            sendChatCounterUpdates: function (levelId, levelPackage) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["SendChatCounterUpdates"], $.makeArray(arguments)));
             },

            sendChatStatus: function (chatStatus) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["SendChatStatus"], $.makeArray(arguments)));
             },

            sendCounterUpdatesManager: function (alertAgent, chatcounters) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["SendCounterUpdatesManager"], $.makeArray(arguments)));
             },

            sendCounterUpdatesManagerAgent: function (alertAgent, chatcounters) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["SendCounterUpdatesManagerAgent"], $.makeArray(arguments)));
             },

            sendQueueAlert: function (chatStatus) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["SendQueueAlert"], $.makeArray(arguments)));
             },

            sendQueueCounters: function (queuecounters) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["SendQueueCounters"], $.makeArray(arguments)));
             },

            updateLiveChatStatus_SR: function (chatDetailWithStatuses) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["UpdateLiveChatStatus_SR"], $.makeArray(arguments)));
             },

            updateRoomIMCounts: function (countupdate) {
                return proxies['alertHub'].invoke.apply(proxies['alertHub'], $.merge(["UpdateRoomIMCounts"], $.makeArray(arguments)));
             }
        };

        proxies['stChatHub'] = this.createHubProxy('stChatHub'); 
        proxies['stChatHub'].client = { };
        proxies['stChatHub'].server = {
            agentChatLogin: function (chatMode) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["AgentChatLogin"], $.makeArray(arguments)));
             },

            createChatRoom: function (roomName, senderUserId, permissions) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["CreateChatRoom"], $.makeArray(arguments)));
             },

            createIM: function (userIDs, linkedMessage, isRequestAssitance, creatorUserId) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["CreateIM"], $.makeArray(arguments)));
             },

            editChatRoom: function (chatId, roomName, newPermissions) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["EditChatRoom"], $.makeArray(arguments)));
             },

            getOlderMessages: function (roomKey, olderThanMessageId) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["GetOlderMessages"], $.makeArray(arguments)));
             },

            joinRoom: function (chatKey) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["JoinRoom"], $.makeArray(arguments)));
             },

            reviveIM: function (chatId, linkedMessage, isRequestAssitance, revivingUserId) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["ReviveIM"], $.makeArray(arguments)));
             },

            send: function (chatKey, message) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["Send"], $.makeArray(arguments)));
             },

            sendSysMessage: function (chatKey, message) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["SendSysMessage"], $.makeArray(arguments)));
             },

            toggleMute: function (chatKey) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["ToggleMute"], $.makeArray(arguments)));
             },

            updateAgentStatus: function (userId, isActive) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["UpdateAgentStatus"], $.makeArray(arguments)));
             },

            updateLastRead: function (chatKey, messageId) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["UpdateLastRead"], $.makeArray(arguments)));
             },

            userTyping: function (chatKey) {
                return proxies['stChatHub'].invoke.apply(proxies['stChatHub'], $.merge(["UserTyping"], $.makeArray(arguments)));
             }
        };

        proxies['stClientChatHub'] = this.createHubProxy('stClientChatHub'); 
        proxies['stClientChatHub'].client = { };
        proxies['stClientChatHub'].server = {
            agent_JoinRoom: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["Agent_JoinRoom"], $.makeArray(arguments)));
             },

            agentLogin: function (isQueue, isGlobal) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["AgentLogin"], $.makeArray(arguments)));
             },

            chatAssigned: function (chatId, toUserId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["ChatAssigned"], $.makeArray(arguments)));
             },

            chatEnded: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["ChatEnded"], $.makeArray(arguments)));
             },

            chatTransferred: function (chatId, newAgentId, oldAgentId, oldGroupId, transferredBy) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["ChatTransferred"], $.makeArray(arguments)));
             },

            checkStatus: function (chatsObj, isQueue, globalFilters) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["CheckStatus"], $.makeArray(arguments)));
             },

            endChat: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["EndChat"], $.makeArray(arguments)));
             },

            pruneChat: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["PruneChat"], $.makeArray(arguments)));
             },

            send: function (chatId, message, isCoaching, isHtml) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["Send"], $.makeArray(arguments)));
             },

            surveyCompleted: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["SurveyCompleted"], $.makeArray(arguments)));
             },

            takeChat: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["TakeChat"], $.makeArray(arguments)));
             },

            transferChat: function (chatId, newGroupId, newAgentId, transferNote) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["TransferChat"], $.makeArray(arguments)));
             },

            transmitMessage: function (chatId, message, isForAttachment) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["TransmitMessage"], $.makeArray(arguments)));
             },

            updateIdle: function (chatId, newIdleDate) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["UpdateIdle"], $.makeArray(arguments)));
             },

            updateLastRead: function (chatId, lastReadId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["UpdateLastRead"], $.makeArray(arguments)));
             },

            updateQueueTime: function (session) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["UpdateQueueTime"], $.makeArray(arguments)));
             },

            updateTyping: function (chatId, isTyping, isCoaching, unsentMessage) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["UpdateTyping"], $.makeArray(arguments)));
             },

            userLogin: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["UserLogin"], $.makeArray(arguments)));
             },

            userRegisterConnection: function (chatId) {
                return proxies['stClientChatHub'].invoke.apply(proxies['stClientChatHub'], $.merge(["UserRegisterConnection"], $.makeArray(arguments)));
             }
        };

        proxies['ticketsHub'] = this.createHubProxy('ticketsHub'); 
        proxies['ticketsHub'].client = { };
        proxies['ticketsHub'].server = {
            enteredTicket: function (id) {
                return proxies['ticketsHub'].invoke.apply(proxies['ticketsHub'], $.merge(["EnteredTicket"], $.makeArray(arguments)));
             },

            leftTicket: function (id) {
                return proxies['ticketsHub'].invoke.apply(proxies['ticketsHub'], $.merge(["LeftTicket"], $.makeArray(arguments)));
             }
        };

        return proxies;
    };

    signalR.hub = $.hubConnection("/signalr", { useDefaultPath: false });
    $.extend(signalR, signalR.hub.createHubProxies());

}(window.jQuery, window));