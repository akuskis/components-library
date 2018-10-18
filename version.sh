#!/usr/bin/env bash

usage()
{
    cat << EOF
Help:

    --can-publish
        Checks that the current version is not yet released (can be published).

    -h, --help
        Show help.
EOF
}

function errcho
{
    >&2 echo "$@"
}

function get_package_name
{
    sed -rne 's/.*"name":\s"(\S*)".*/\1/p' package.json
}

function get_current_version
{
    sed -rne 's/.*"version":\s"(\S*)".*/\1/p' package.json
}

function get_released_versions
{
    package_name=`get_package_name`

    npm view "${package_name}" versions
}

function was_released
{
    current_version=`get_current_version`
    released_versions=`get_released_versions`

    echo "${released_versions}" | grep "${current_version}" 1> /dev/null
}

# =============================================================================
# Parse arguments
# =============================================================================

while [[ $# > 0 ]]
do
key="$1"

case $key in
    --can-publish)
        if was_released; then
            errcho "This version was already released"
            exit 1
        fi
        echo "Can be published"
        exit 0
        ;;
    -h|--help|*)
        usage
        exit 0
        ;;
esac
shift # past argument or value
done
